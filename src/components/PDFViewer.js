import React from 'react';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';

const pdfjsVersion = '3.11.174'; // Reemplaza con la versión correcta

const PDFViewer = ({ fileUrl }) => {
    const defaultLayoutPluginInstance = defaultLayoutPlugin();

    return (
<div className="pdf-viewer-container bg-gray-100 p-4 rounded-lg shadow-lg">
    <Worker workerUrl={`https://unpkg.com/pdfjs-dist@${pdfjsVersion}/build/pdf.worker.min.js`}>
        <Viewer fileUrl={fileUrl} plugins={[defaultLayoutPluginInstance]} />
    </Worker>
</div>

    );
};

export default PDFViewer;
