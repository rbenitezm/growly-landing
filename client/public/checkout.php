<?php
// Ruta al SDK descargado manualmente
require_once(__DIR__ . '/../stripe/init.php');

$config = require __DIR__ . '/../.env.php'; // sube un nivel fuera de public
$stripeSecretKey = $config['STRIPE_SECRET_KEY'];

\Stripe\Stripe::setApiKey($stripeSecretKey);

$email = '';
if (isset($_GET['email'])) {
    $email = filter_var($_GET['email'], FILTER_VALIDATE_EMAIL);
} elseif (isset($_POST['email'])) {
    $email = filter_var($_POST['email'], FILTER_VALIDATE_EMAIL);
}

if (!$email) {
    http_response_code(400);
    echo "Email inválido o no proporcionado.";
    exit;
}


//$email = htmlspecialchars($_POST['email']);

try {
    $session = \Stripe\Checkout\Session::create([
        'payment_method_types' => ['card'],
        'line_items' => [
            [
                'price_data' => [
                    'currency' => 'usd',
                    'product_data' => [
                        'name' => 'Pack Infalible Disciplina Positiva',
                    ],
                    'unit_amount' => 18900, // en centavos: 189.00 USD
                ],
                'quantity' => 1,
            ]
        ],
        'mode' => 'payment',
        'customer_email' => $email,
        'success_url' => 'https://growly.online/thank-you',
        'cancel_url' => 'https://growly.online/error',
        'metadata' => [
            'source' => 'masterclass_estrategia',
            'user_email' => $email
        ],
        'client_reference_id' => $email,
    ]);

    header("Location: " . $session->url);
    exit;
} catch (Exception $e) {
    echo "Error al crear la sesión: " . $e->getMessage();
}

?>