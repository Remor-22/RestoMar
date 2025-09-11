class ContactForm {
    constructor() {
        this.form = document.getElementById('contactForm');
        this.init();
    }

    init() {
        this.form.addEventListener('submit', (event) => {
            event.preventDefault();
            this.handleSubmit();
        });
    }

    handleSubmit() {
        const formData = new FormData(this.form);
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            message: formData.get('message')
        };

        // Here you can handle the form submission, e.g., send data to a server
        console.log('Form submitted:', data);
        this.form.reset(); // Reset the form after submission
    }
}

// Initialize the contact form when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new ContactForm();
});