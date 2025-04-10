document.getElementById('cancelBtn').addEventListener('click', function() {
    document.getElementById('initialStep').classList.add('hidden');
    document.getElementById('nameConfirmationStep').classList.remove('hidden');
});

document.getElementById('yesNameBtn').addEventListener('click', function() {
    document.getElementById('nameConfirmationStep').classList.add('hidden');
    document.getElementById('addressConfirmationStep').classList.remove('hidden');
});

document.getElementById('noNameBtn').addEventListener('click', function() {
    document.getElementById('nameConfirmationStep').classList.add('hidden');
    document.getElementById('addressConfirmationStep').classList.remove('hidden');
});

document.getElementById('yesAddressBtn').addEventListener('click', function() {
    document.getElementById('addressConfirmationStep').classList.add('hidden');
    document.getElementById('homeConfirmationStep').classList.remove('hidden');
});

document.getElementById('noAddressBtn').addEventListener('click', function() {
    document.getElementById('addressConfirmationStep').classList.add('hidden');
    document.getElementById('homeConfirmationStep').classList.remove('hidden');
});

document.getElementById('yesHomeBtn').addEventListener('click', function() {
    document.getElementById('homeConfirmationStep').classList.add('hidden');
    document.getElementById('loadingStep').classList.remove('hidden');
    
    // Simulate loading for 2 seconds before showing final message
    setTimeout(() => {
        document.getElementById('loadingStep').classList.add('hidden');
        document.getElementById('finalConfirmMessage').classList.remove('hidden');
    }, 2000);
});

document.getElementById('noHomeBtn').addEventListener('click', function() {
    document.getElementById('homeConfirmationStep').classList.add('hidden');
    document.getElementById('initialStep').classList.remove('hidden');
});