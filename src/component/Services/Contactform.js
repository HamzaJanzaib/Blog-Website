const Contactform = (e) => {
    e.preventDefault();
    
    const formData = {
        name: e.target.Name.value,
        phone: e.target.phone.value,
        email: e.target.email.value,
        subject: e.target.subject.value,
        message: e.target.Message.value
    };

   

    console.log('Form Data:', formData);
    alert('Form submitted successfully!');
}
export default Contactform

