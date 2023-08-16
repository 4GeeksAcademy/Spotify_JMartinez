
import React, { useState, useEffect, useRef } from "react";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component


const Home = () => {



	const Col = { background: "black", color: "white" }
	const fondo = { height: "100%", width: "100%" }
	const [caso, setCaso] = useState()

	const [repl, setRepl] = useState("block")
	const [pausel, setPausel] = useState("none")
	const [focus, setFocus] = useState("")

	const [prueba, setPrueba] = useState([])

	const botoAudio = useRef()

	const [url, setUrl] = useState("")

	const stylebotton = { height: "500px", min_width: "90px" }
	const [cancion, setCancion] = useState([])

	function obtenerInfo() {
		fetch('https://playground.4geeks.com/apis/fake/sound/songs')
			.then((response) => response.json())
			.then((data) => setCancion(data))
			.catch((error) => console.log(error))

	}


	function play() {

		if (botoAudio.current.paused) {
			botoAudio.current.play()
			setRepl("none")
			setPausel("block")

		} else {
			setPausel("none")
			setRepl("block")
			botoAudio.current.pause()

		}

	}

	useEffect(function () {

		obtenerInfo()

	}, [])

	useEffect(function () {

		buclepin()



	}, [caso])


	function buclepin() {
		let valor2 = []

		for (let i = 0; i < cancion.length; i++) {
			valor2 = cancion[i].id
		}
		console.log(valor2)


	}


	function pruebas() {
		cancion.map((item, index) => (

			document.getElementById(item.id).style.color = "white",
			document.getElementById(item.id).style.opacity = "100%",
			document.getElementById(item.id).style.border = "none"

		))
		console.log(prueba)

	}


	function sig() {
		if (caso < cancion.length) {
			pruebas()
			document.getElementById(caso).style.opacity = "50%"
			document.getElementById(caso).style.border = "3px solid red"
			setCaso(caso + 1)
			imprimirN(caso)

		} else if (caso === cancion.length) {

			imprimirN(caso)
			setCaso(caso)
		}
	}

	function back() {
		if (caso > 0) {
			pruebas()
			document.getElementById(caso).style.opacity = "50%"
			document.getElementById(caso).style.border = "3px solid red"
			setCaso(caso - 1)
			imprimirB(caso)
		} else if (caso === 0) {
			imprimirB(caso)
			setCaso(caso)


		}
	}

	function imprimirN(num) {

		let ranN = 'https://assets.breatheco.de/apis/sound/' + cancion[num].url
		botoAudio.current.src = ranN
		console.log(botoAudio.current)
		play()

	}

	function imprimirB(num) {

		let ranB = 'https://assets.breatheco.de/apis/sound/' + cancion[num].url
		botoAudio.current.src = ranB
		console.log(botoAudio.current)
		play()

	}




	/* 	function cambiar() {
			if (focus !== "") {
				for (let i = 0; i < cancion.length; i++) {
					let monos = cancion[i].id
					document.getElementById(monos).style.background = "black"
					document.getElementById(monos).style.opacity = "100%"
					document.getElementById(monos).style.border = "none"
	
				}
	
				document.getElementById(focus).style.border = "3px solid red"
				document.getElementById(monos).style.opacity = "50%"
	
			}
	
		} */



	return (
		<div className="text-start" style={fondo}>
			<div className=" mt-2">
				<div className="col-6 m-auto " >
					<div className="overflow-auto" style={stylebotton} id="list-tab" role="tablist"  >
						<div className="list-group" id="list-tab" style={stylebotton}  >
							{cancion.map(function (item) { return <a className="col text-with  p-3  list-group-item list-group-item-action" style={Col} id={item.id} data-bs-toggle="list" role="tab" key={item.id} onClick={() => { setUrl(item.url); setCaso(item.id); setFocus(item.id) }}>{item.id + " " + item.name + " " + "-"}</a> })}

						</div>

					</div>
				</div>
			</div>

			<div className="bg-black col-6 m-auto p-4 d-flex justify-content-evenly">

				<audio className="d-none" src={"https://assets.breatheco.de/apis/sound/" + url} ref={botoAudio}>
				</audio>

				<a className="" onClick={() => back()} >
					<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-caret-left-square-fill" viewBox="0 0 16 16">
						<path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm10.5 10V4a.5.5 0 0 0-.832-.374l-4.5 4a.5.5 0 0 0 0 .748l4.5 4A.5.5 0 0 0 10.5 12z" />
					</svg>
				</a>

				<div className="PlayStop">

					<a className={"d-" + repl} onClick={() => play()}>
						<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-play-circle-fill" viewBox="0 0 16 16">
							<path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z" />
						</svg>
					</a>
					<a className={"d-" + pausel} onClick={() => play()}>
						<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-pause-circle-fill" viewBox="0 0 16 16">
							<path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.25 5C5.56 5 5 5.56 5 6.25v3.5a1.25 1.25 0 1 0 2.5 0v-3.5C7.5 5.56 6.94 5 6.25 5zm3.5 0c-.69 0-1.25.56-1.25 1.25v3.5a1.25 1.25 0 1 0 2.5 0v-3.5C11 5.56 10.44 5 9.75 5z" />
						</svg>

					</a>
				</div>

				<a className="" onClick={() => sig()} >
					<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-caret-right-square-fill" viewBox="0 0 16 16">
						<path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm5.5 10a.5.5 0 0 0 .832.374l4.5-4a.5.5 0 0 0 0-.748l-4.5-4A.5.5 0 0 0 5.5 4v8z" />
					</svg>
				</a>

			</div>
		</div>
	);
};

export default Home;
