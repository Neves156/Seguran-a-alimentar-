// Exemplo de código básico para um Progressive Web App (PWA)

const app = {
    init: function() {
        document.getElementById('generate-report').addEventListener('click', app.generateReport);
    },
    
    generateReport: function() {
        const companyName = document.getElementById('company-name').value;
        const violations = document.getElementById('violations').value;
        
        if (!companyName || !violations) {
            alert('Por favor, preencha todos os campos.');
            return;
        }
        
        const report = `Relatório de Inspeção\n\nEmpresa: ${companyName}\nIrregularidades: ${violations}`;
        app.downloadReport(report);
    },
    
    downloadReport: function(reportContent) {
        const blob = new Blob([reportContent], { type: 'text/plain' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = 'relatorio_inspecao.txt';
        link.click();
    }
};

document.addEventListener('DOMContentLoaded', app.init);
