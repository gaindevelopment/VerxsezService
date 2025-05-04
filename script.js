document.addEventListener('DOMContentLoaded', () => {
  const builderForm = document.getElementById('builderForm');
  const redirectMessage = document.getElementById('redirectMessage');
  const transcript = document.getElementById('transcript');

  builderForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(builderForm);
    const data = Object.fromEntries(formData.entries());

    let transcriptText = `
Primary Color: ${data.primaryColor}
Secondary Color: ${data.secondaryColor}
Website Title: ${data.title}
Logo URL: ${data.logoUrl}
Custom Text: ${data.customText}
Font: ${data.font}
    `;
    transcript.textContent = transcriptText.trim();

    builderForm.classList.add('hidden');
    redirectMessage.classList.remove('hidden');
  });
});
