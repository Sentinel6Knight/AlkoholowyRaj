<?php
// Lista losowych promocji - dodaj swoje
$promocje = [
    ['tekst' => '-20% na piwa rzemieślnicze. Tylko do końca tygodnia!', 'kod' => 'PIWO20'],
    ['tekst' => '-15% na whisky premium', 'kod' => 'WHISKY15'],
    ['tekst' => 'Kup wino, drugi 50% taniej!', 'kod' => 'WINO50'],
    ['tekst' => '-25% na wódki polskie', 'kod' => 'WODKA25'],
    ['tekst' => '2+1 gratis na likiery', 'kod' => 'LIKIERYGRATIS']
];

// Losuj jedną promocję
$promocja = $promocje[array_rand($promocje)];

// Zapisz do pliku JSON (czytelny dla JS)
file_put_contents('promocja-tygodnia.json', json_encode($promocja));

// Wyświetl potwierdzenie (opcjonalne)
echo "Nowa promocja zapisana: " . $promocja['tekst'] . " (Kod: " . $promocja['kod'] . ")";
?>
