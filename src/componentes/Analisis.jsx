import React from 'react'
import logo from '../medicina.jpg'
import Login from './Login'
import swal from 'sweetalert'

const Analisis = () => {
  const [estado, setEstado] = React.useState(true)
  const [est_imc, setEst_imc] = React.useState(false)
  const [est_leu, setEst_leu] = React.useState(true)
  const [est_otro, setEst_otro] = React.useState(false)
  const [op, setOp] = React.useState(1)
  const [leu, setLeu] = React.useState("")
  const [peso, setPeso] = React.useState("")
  const [est, setEst] = React.useState("")
  const [ts, setTs] = React.useState("")
  const [tri, setTri] = React.useState("")
  const [col, setCol] = React.useState("")
  const [edad, setEdad] = React.useState("")
  
  const atras = ()=>{
    setEstado(false)
   }
   const hab_imc = ()=>{
	setOp(2)
	setEst_imc(true)
	setEst_otro(false)
	setEst_leu(false)
	setLeu("")
	setPeso("")
	setTs("")
	setEst("")
	setCol("")
	setTri("")
	setEdad("")
   }
   const hab_leu = ()=>{
	setOp(1)
    setEst_imc(false)
	setEst_otro(false)
	setEst_leu(true)
	setLeu("")
	setPeso("")
	setTs("")
	setEst("")
	setCol("")
	setTri("")
	setEdad("")
   }
   const hab_otro = ()=>{
	setOp(3)
	setEst_imc(false)
	setEst_otro(true)
	setEst_leu(false)
	setLeu("")
	setPeso("")
	setTs("")
	setEst("")
	setCol("")
	setTri("")
	setEdad("")
   }

   const resultado = async(e)=>{
    e.preventDefault()

	if (op===1){

		if(!leu.trim() || !peso.trim() || !est.trim() || !ts.trim()){
			swal({
			  title: "Error",
			  text: "No puede dejar ningún campo vacio.",
			  icon: "error",
			  button: "Aceptar"
			})
			return
		}
	
		if (parseInt(leu)>30){
		  swal("Usted tiene una infección!")
	
		}else{
		  swal("Todo normal!")
		}

	}else{

		if(op===2){

			if(!peso.trim() || !est.trim()){
				swal({
				  title: "Error",
				  text: "No puede dejar ningún campo vacio.",
				  icon: "error",
				  button: "Aceptar"
				})
				return
			}
            const estatura = (parseFloat(est)/100)*2
			const imc = parseInt(peso)/estatura
			if(imc<=18.5){

				swal("Usted tiene bajo peso")
			}
			else{
				if (imc>18.5 && imc<25){
					swal("Peso normal")

				}else{
					swal("Usted se encuentra en sobrepeso")
				}
			}

		}else{
			if(op===3){
				
				const msjtri = ""
				const msjcol = ""
				const valt = false
				const valc = false
				if(!tri.trim() || !col.trim() || !edad.trim()){
					swal({
					  title: "Error",
					  text: "No puede dejar ningún campo vacio.",
					  icon: "error",
					  button: "Aceptar"
					})
					return
				}
				swal("Por el momento este analisis no está disponible")
				if(parseInt(tri)>=150 && parseInt(tri)<=199){
					msjtri("LIMITROFE ALTO")
					valt(true)
				}
				
				if(parseInt(tri)>=200 && parseInt(tri)<=499){
						msjtri("ALTO")
						valt(true)
				}
				
				if(parseInt(tri)>=500){
							msjtri("MUY ALTO")
							valt(true)
				}else{
							valt(false)
				}
				
				

				if(parseInt(edad)<=19 && parseInt(col)<170){
					valc(false)	

				}else{
					if(parseInt(edad)<=19 && parseInt(col)>=170){
						valc(true)
						msjcol("COLESTEROL ALTO")	
	
					}
				}

				if(parseInt(edad)>19){

					if(parseInt(col)>=125 && parseInt(col)<=200){
						valc(false)
					}else{
						if(parseInt(col)>200){
							valc(true)
							msjcol("COLESTEROL ALTO")
						}else{
							valc(true)
							msjcol("COLESTEROL BAJO")
						}
					}
				}
			
				if (valc===false && valt===false){
					swal("Todo normal")
				}else{
					if (valc===false && valt===true){
						swal("Usted está teniendo un nivel de triglicéridos de categoria :"+msjtri)
					}
					else{
						if (valc===true && valt===false){
							swal("Usted está teniendo un nivel de colesterol de categoria :"+msjcol)
						}else{
							swal("Usted está presentado un nivel de colesterol de categoria : "+msjcol+" y nivel de triglicéridos de categoria :"+msjtri)
						}
					}
				}

			}
		}
	}





   }





  return (


    <div>{
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
		<nav class="navbar navbar-expand-lg navbar-light bg-light">
  			<a class="navbar-brand" href="#aa">
			  <i class="fas fa-stethoscope"></i></a>
  			
  			<div class="collapse navbar-collapse" id="navbarNavAltMarkup">
   				<div class="navbar-nav">
      			<a class="nav-item nav-link active" href="#a"onClick={hab_leu}><p class="font-weight-bold">Infección</p><span class="sr-only">(current)</span></a>
      			<a class="nav-item nav-link" href="#a" onClick={hab_imc}><p class="font-weight-bold">IMC</p></a>
      			<a class="nav-item nav-link" href="#a" onClick={hab_otro}><p class="font-weight-bold">General</p></a>
    			</div>
  			</div>
		</nav>
		<br /><br />
    	<div class="d-flex justify-content-center">
	    {
			est_leu ?

			<form  id="formDatosAnalizar">
			<div class="row">

				<div class="col">
				<p class="font-weight-bold">Tipo de sangre</p>
					<div class="">
						<select name="" id="tipoSangre" class="form-control" data-toggle="tooltip"
							title="Ingrese tipo de Sangre!" required value={ts} onChange={(e)=> setTs(e.target.value)}>
              				<option>Seleccione</option>
							<option>A+</option>
							<option>A-</option>
							<option>B+</option>
							<option>B-</option>
							<option>AB+</option>
							<option>AB-</option>
							<option>O+</option>
							<option>O-</option>
						</select>
						<div class="invalid-feedback">
							Campo vacio, por favor llenarlo
						</div>
					</div>
				</div>
				
				<div class="col">
				<p class="font-weight-bold">Peso</p>
					<div class="input-group mb-2">
					<input type="number" id="peso" class="form-control" value={peso} onChange={(e)=> setPeso(e.target.value)}></input>
					<div class="input-group-prepend">
          				<div class="input-group-text">KG</div>
        			</div>
					</div>
				</div>
				<div class="col">
				<p class="font-weight-bold">Estatura</p>
					<div class="input-group mb-2">
					<input type="number" id="Estatura" class="form-control"value={est} onChange={(e)=> setEst(e.target.value)}></input>
					<div class="input-group-prepend">
          				<div class="input-group-text">CM</div>
        			</div>
					</div>
				</div>
				<div class="col">
					<p class="font-weight-bold">Leucocitos</p>
					<div class="input-group mb-2">
					<input type="number" id="Leucocitos" class="form-control"value={leu} onChange={(e)=> setLeu(e.target.value)}></input>
					<div class="input-group-prepend">
          				<div class="input-group-text">%</div>
        			</div>
					</div>
				</div>
			</div>
		</form>

			:
			est_imc ?

			<form  id="formDatosAnalizar">
			<div class="row">

				
				<div class="col">
				<p class="font-weight-bold">Peso</p>
					<div class="input-group mb-2">
					<input type="number" id="peso" class="form-control" value={peso} onChange={(e)=> setPeso(e.target.value)}></input>
					<div class="input-group-prepend">
          				<div class="input-group-text">KG</div>
        			</div>
					</div>
				</div>
				<div class="col">
				<p class="font-weight-bold">Estatura</p>
					<div class="input-group mb-2">
					<input type="number" id="Estatura" class="form-control"value={est} onChange={(e)=> setEst(e.target.value)}></input>
					<div class="input-group-prepend">
          				<div class="input-group-text">CM</div>
        			</div>
					</div>
				</div>
	
			</div>
		</form>
		:
		<form  id="formDatosAnalizar">
			<div class="row">

			<div class="col">
				<p class="font-weight-bold">Edad</p>
					<div class="input-group mb-2">
					<input type="number" id="edad" class="form-control" value={edad} onChange={(e)=> setEdad(e.target.value)}></input>
					<div class="input-group-prepend">
          				<div class="input-group-text">AÑOS</div>
        			</div>
					</div>
				</div>
				<div class="col">
				<p class="font-weight-bold">Triglicéridos</p>
					<div class="input-group mb-2">
					<input type="number" id="tri" class="form-control" value={tri} onChange={(e)=> setTri(e.target.value)}></input>
					<div class="input-group-prepend">
          				<div class="input-group-text">mg/dL</div>
        			</div>
					</div>
				</div>
				<div class="col">
				<p class="font-weight-bold">Colesterol</p>
					<div class="input-group mb-2">
					<input type="number" id="col" class="form-control"value={col} onChange={(e)=> setCol(e.target.value)}></input>
					<div class="input-group-prepend">
          				<div class="input-group-text">mg/dL</div>
        			</div>
					</div>
				</div>
	
			</div>
		</form>
			
		}
		
		</div>
	<br /><br />
	<div class="d-flex justify-content-center">
		
			<button class="btn btn-primary" type="submit" onClick={resultado}>Analizar</button>
		
	</div>	 
	</div>

      :
    <Login/>

}
</div>

  )
}

export default Analisis