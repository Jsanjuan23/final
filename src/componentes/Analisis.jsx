import React from 'react'
import logo from '../medicina.jpg'
import Login from './Login'

import { useState} from 'react';
import Tesseract from 'tesseract.js';

const Analisis = () => {
  const [estado, setEstado] = React.useState(true)
  const [est_img, setEst_img] = React.useState(true)
  const [ana, setAna] = React.useState(false)
  const [valor, setValor] = React.useState("")
  const [text, setText] = React.useState("")
  const [imagePath, setImagePath] = useState("");

  const handleChange = (event) => {
    if (event.target.files[0].type === "image/jpg" ||
    event.target.files[0].type === "image/jpeg" ||
    event.target.files[0].type === "image/png" ||
    event.target.files[0].type === "image/bmp" ||
    event.target.files[0].type === "image/pbm"
    ){
      setImagePath(URL.createObjectURL(event.target.files[0]));
	  setEst_img(false)
    }else{
      alert("Por favor seleccione una imagen")
    }
  }

  const handleClick = () => {
	/*const canvas = canvasRef.current;
	const ctx = canvas.getContext('2d');
  
	ctx.drawImage(imageRef.current, 0, 0);
	ctx.putImageData(preprocessImage(canvas), 0,0);
	const dataUrl = canvas.toDataURL('image/jpeg');*/
  
	Tesseract.recognize(
	  imagePath, 'eng',
	  {
		logger: m => console.log(m)
	  }
	).catch(err => {
	  console.error(err);
	}).then(result => {
	  // Get Confidence score
	  let texto_extraido = result.data.text
	  console.log(texto_extraido)
	  let codingRegex = /leuco.{8,10}/gi;
	  console.log(codingRegex)
	  let infeccion = texto_extraido.match(codingRegex); 
	  console.log(infeccion)
	  let codingRegex2 = /\d{1,15}/gi;
	  console.log(codingRegex2)
	  if (infeccion[0] == null || infeccion[0] === undefined){
		setValor("Examen medico no cuenta la patologia Leucocitos")
	  }else{
		let valortemp = infeccion[0].match(codingRegex2);
		setValor(Number(valortemp[0]))
        console.log(valor)
		if (parseInt(valor)>30){
			setText("Usted tiene una infección")
	  
		  }else{
			setText("Todo normal!")
		}
		
	  setAna(true)
	}
})
  }
  
  const atras = ()=>{
    setEstado(false)
   }

  return (


    <div>
		
		{
         estado ? 

		<div class="container mt-3">
			<nav class="navbar navbar-expand-sm bg-primary navbar-dark">
			<div class="container-fluid">
            
        		<img src={logo} alt="logo" style={{width: '40px'}} class="rounded-pill"/>
				<div class="container-fluid">
          			<ul class="navbar-nav">
						<li class="nav-item">
            				<h5 style={{color:"white"}}>Medical Analysis</h5>
						</li>	
					</ul>
				</div>
        	<button type="button" class="btn btn-dark btn-rounded" onClick={atras}>
       		<i class="fas fa-hand-point-left"></i>
			</button>
			</div>
		</nav>
    	<br /><br />


		 <div class="container" align="center">
		
		 <h2>IMAGEN A PROCESAR</h2>	
		 <br /><br />
		 
		 <div class="row">
		  {
			est_img ? 
		 
		 <div class="col">
			 
				 <div class="custom-file">
				 <input type="file" class="custom-file-input" id="customFile" accept='.png, .jpg, .jpeg, .bmp, .pbm'  onChange={handleChange}/>
				 <label class="custom-file-label" for="customFile">Selecciona imagen</label>
				</div>

		</div>
		:
		<div class="row">
		<div class="col">
		<img src={imagePath}  alt='imagen' class="img-fluid" style={{width:"900px"}}/>
		<br />
		<br />
		<div class="custom-file">
				 <input type="file" class="custom-file-input" id="customFile" accept='.png, .jpg, .jpeg, .bmp, .pbm'  onChange={handleChange}/>
				 <label class="custom-file-label" for="customFile">Selecciona imagen</label>
				</div>
	    </div>
	    <div class="col">
		<button class="btn btn-warning btn-lg btn-block" type="submit" onClick={handleClick} style={{color:"white"}}>Analizar</button>
        <br /><br />
		{
			ana ? 
			<div>
			<h5 style={{color:"red"}}>Los resultados del análisis fueron los siguientes</h5>
			<br />
			<div align="center"style={{background:"gray", width:"200px",height:"30px",borderRadius:"10px"}}>
			<p><em>{text}</em></p>
			</div>
				
			</div>
			:
			<p ><em>Aquí le mostraremos sus resultados, por favor al hacer click espere unos segundos mientras se realiza el análisis</em></p>
		}
	   </div>
		</div>

		
       
        }
		</div>
		<br /><br />	
	    </div>

		 
		

	</div>
	:
	<Login/>

  }
</div>

  )
}

export default Analisis