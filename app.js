<!DOCTYPE html>
<html lang="pl">
<head>
  <meta charset="UTF-8">
  <title>Sklep</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>

<nav>
  <a href="index.html">Start</a>
  <a href="koszyk.html">Koszyk (<span id="cartCount">0</span>)</a>
</nav>

<div class="container">
  <h1>Sklep</h1>

  <div class="grid">

    <div class="card">
      <h3>Piwo</h3>
      <p>6.99 zł</p>
      <button onclick="add('Piwo', 6.99)">Dodaj</button>
    </div>

    <div class="card">
      <h3>Wino</h3>
      <p>29.99 zł</p>
      <button onclick="add('Wino', 29.99)">Dodaj</button>
    </div>

    <div class="card">
      <h3>Wódka</h3>
      <p>49.99 zł</p>
      <button onclick="add('Wódka', 49.99)">Dodaj</button>
    </div>

  </div>
</div>

<script src="app.js"></script>
</body>
</html>
