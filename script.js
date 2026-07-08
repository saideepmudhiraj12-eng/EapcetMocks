*{
margin:0;
padding:0;
box-sizing:border-box;
font-family:Arial,sans-serif;
}

body{
background:#0f172a;
color:white;
}

header{
display:flex;
justify-content:space-between;
align-items:center;
padding:20px 8%;
background:#111827;
}

header h1{
color:#38bdf8;
}

nav a{
color:white;
text-decoration:none;
margin-left:20px;
font-weight:bold;
}

.hero{
text-align:center;
padding:100px 20px;
}

.hero h2{
font-size:42px;
margin-bottom:20px;
}

.hero p{
font-size:18px;
max-width:700px;
margin:auto;
line-height:1.7;
}

button{
margin-top:30px;
padding:15px 35px;
border:none;
background:#38bdf8;
color:white;
font-size:18px;
border-radius:10px;
cursor:pointer;
}

.features{
padding:80px 8%;
display:grid;
grid-template-columns:repeat(auto-fit,minmax(250px,1fr));
gap:25px;
}

.features h2{
grid-column:1/-1;
text-align:center;
margin-bottom:20px;
}

.card{
background:#1e293b;
padding:25px;
border-radius:15px;
transition:.3s;
}

.card:hover{
transform:translateY(-8px);
}

footer{
padding:25px;
text-align:center;
background:#111827;
margin-top:60px;
}
