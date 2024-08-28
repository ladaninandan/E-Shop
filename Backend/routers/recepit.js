const express = require('express');
const PDFDocument = require('pdfkit');
const fs = require('fs');
const db = require("../db");
const path = require('path');

const route = express.Router();

route.get('/download-receipt', (req, res) => {

   const { order_id } = req.query;
   const cleanedOrderId = order_id.trim().toLowerCase();

   console.log('Received order_id:', order_id);

   if (!order_id) {
      return res.status(400).send('Order ID is required');
   }

   // const sql = "SELECT * FROM orders WHERE LOWER(TRIM(order_id)) = ?";


   const sql = `
     SELECT o.*, u.*
     FROM orders o
     JOIN userdetails u ON o.id = u.id
     WHERE LOWER(TRIM(o.order_id))= ?
   `;

   const { FirstName, LastName, Email, Address, id } = req.body;

   db.query(sql, [cleanedOrderId, FirstName, LastName, Email, Address, id], (error, result) => {
      if (error) {
         console.error('Database error:', error);
         return res.status(500).send('Internal Server Error');
      }


      console.log('SQL query result:', result);

      if (result.length === 0) {
         return res.status(404).send('Order not found');
      }

      const data = result[0];


      const doc = new PDFDocument({ margin: 50 });
      const fileName = `order-receipt-${cleanedOrderId.replace(/\s/g, '_')}.pdf`; // Replace spaces in order_id with underscores

      // Ensure directory exists
      const dirPath = path.join(__dirname);
      if (!fs.existsSync(dirPath)) {
         fs.mkdirSync(dirPath, { recursive: true });
      }

      const filePath = path.join(dirPath, fileName);
      const fileStream = fs.createWriteStream(filePath);

      doc.pipe(fileStream);

      doc
         .strokeColor('black')
         .lineWidth(1)
         .rect(doc.page.margins.left - 50, doc.page.margins.top - 50,
            doc.page.width - doc.page.margins.left - doc.page.margins.right + 100,
            doc.page.height - doc.page.margins.top - doc.page.margins.bottom + 100)
         .stroke();

      const logoPath = path.join(__dirname, 'logointeb.png');
      doc.image(logoPath, doc.page.margins.left, doc.page.margins.top - 40, { width: 70 });

      doc.fontSize(25).text('Order Receipt', { align: 'center', underline: true }).fillColor('black').moveDown(2);

      const tableTop = doc.y + 10;
      const tableLeft = doc.page.margins.left;
      const columnSpacing = 200;
      const rowSpacing = 20;

      doc.fontSize(14).text('Field', tableLeft, tableTop);
      doc.text('Value', tableLeft + columnSpacing, tableTop);

      doc.moveTo(tableLeft, tableTop + 15)
         .moveTo(50, doc.y)
         .lineTo(550, doc.y)
         .moveDown(2)
         .stroke();

      const rowTop = tableTop + 20;

      doc.text('Order ID:', tableLeft, rowTop);
      doc.text(data.order_id, tableLeft + columnSpacing, rowTop);

      doc.text('Customer Name:', tableLeft, rowTop + rowSpacing);
      doc.text(data.FirstName, tableLeft + columnSpacing, rowTop + rowSpacing);

      doc.text('currency:', tableLeft, rowTop + rowSpacing * 2);
      doc.text(data.currency, tableLeft + columnSpacing, rowTop + rowSpacing * 2);

      doc.text('Total Price:', tableLeft, rowTop + rowSpacing * 3);
      doc.text(`${data.amount}`, tableLeft + columnSpacing, rowTop + rowSpacing * 3);

      doc.text('Date:', tableLeft, rowTop + rowSpacing * 4);
      doc.text(data.created_at, tableLeft + columnSpacing, rowTop + rowSpacing * 4);

      doc.text('User ID:', tableLeft, rowTop + rowSpacing * 6);
      doc.text(data.id, tableLeft + columnSpacing, rowTop + rowSpacing * 4);

      doc.text('User Email:', tableLeft, rowTop + rowSpacing * 7);
      doc.text(data.Email, tableLeft + columnSpacing, rowTop + rowSpacing * 7);

      doc.text('User Address:', tableLeft, rowTop + rowSpacing * 8);
      doc.text(data.Address, tableLeft + columnSpacing, rowTop + rowSpacing * 8);

      doc.text('User City:', tableLeft, rowTop + rowSpacing * 10);
      doc.text(data.City, tableLeft + columnSpacing, rowTop + rowSpacing * 10);

      doc.text('User Number:', tableLeft, rowTop + rowSpacing * 11);
      doc.text(data.Number, tableLeft + columnSpacing, rowTop + rowSpacing * 11);

      doc.text('User State:', tableLeft, rowTop + rowSpacing * 12);
      doc.text(data.State, tableLeft + columnSpacing, rowTop + rowSpacing * 12);

      doc.text('User Zip:', tableLeft, rowTop + rowSpacing * 13);
      doc.text(data.Zip, tableLeft + columnSpacing, rowTop + rowSpacing * 13);

      doc
         .strokeColor('#AAAAAA')
         .lineWidth(3)
         .moveDown(2)
         .moveTo(50, doc.y)
         .lineTo(550, doc.y)
         .stroke();

      const footerText = 'Thank you for your purchase!';
      const footerWidth = doc.widthOfString(footerText);
      const footerX = (doc.page.width - footerWidth) / 2;

      doc
         .fontSize(18)
         .moveDown(1)
         .fillColor('green')
         .text(footerText, footerX);

      doc.end();

      fileStream.on('finish', () => {
         res.setHeader('Content-Disposition', `attachment; filename=${fileName}`);
         res.setHeader('Content-Type', 'application/pdf');
         res.sendFile(filePath, (err) => {
            if (err) {
               console.error('File send error:', err);
               res.status(500).send('Error sending the file');
            }
         });
      });

      fileStream.on('error', (err) => {
         console.error('File stream error:', err);
         res.status(500).send('Error creating the file');
      });
   });
});

module.exports = route;
