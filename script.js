const form =document.getElementById('paymentform');

form.addEventListener('submit',(e) => {
    e.preventDefault();
    const amount = document.getElementById('amount'). value;
    const paymentMethod = document.getElementById('payment-method').value;
    // call payment API or process payment here.
    console.log('payment made: $${using ${paymentMethod}');
});




