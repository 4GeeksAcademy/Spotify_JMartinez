
import React, { useState, useEffect, useRef } from "react";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component


const Home = () => {

	const [caso, setCaso] = useState()
	const fondo = { height: "100%", width: "100%" }
	const [repl, setRepl] = useState("block")
	const [pausel, setPausel] = useState("none")

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

	let canci = cancion.map
	console.log(canci)


	function play() {

		console.log(canci)

		if (repl == "block") {

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


	function sig() {

	}

	return (
		<div className="text-start" style={fondo}>
			<div className=" mt-2">
				<div className="col-6 m-auto " >
					<div className="overflow-auto" style={stylebotton} id="list-tab" role="tablist"  >
						<div className="list-group" id="list-tab" role="tablist" style={stylebotton}  >
							{cancion.map(function (item) { return <a className="col text-white bg-black p-3 list-group-item list-group-item-action" id="list-home-list" data-bs-toggle="list" role="tab" key={item.id} onClick={() => setUrl(item.url)}>{item.id + " " + item.name + " " + "-"}</a> })}

						</div>

					</div>
				</div>
			</div>
			<div className="bg-black col-6 m-auto p-4 d-flex justify-content-evenly">

				<audio className="d-none" src={"https://assets.breatheco.de/apis/sound/" + url} ref={botoAudio}>
				</audio>

				<a className={"d-" + "block"} onClick={() => sig()} >
					<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-caret-left-square-fill" viewBox="0 0 16 16">
						<path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm10.5 10V4a.5.5 0 0 0-.832-.374l-4.5 4a.5.5 0 0 0 0 .748l4.5 4A.5.5 0 0 0 10.5 12z" />
					</svg>
				</a>

				<div className="PlayStop">

					<a className={"d-" + repl} onClick={() => play()}>
						<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-play-circle-fill" viewBox="0 0 16 16">
							<path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z" />
						</svg>
					</a>
					<a className={"d-" + pausel} onClick={() => play()}>
						<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-pause-circle-fill" viewBox="0 0 16 16">
							<path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.25 5C5.56 5 5 5.56 5 6.25v3.5a1.25 1.25 0 1 0 2.5 0v-3.5C7.5 5.56 6.94 5 6.25 5zm3.5 0c-.69 0-1.25.56-1.25 1.25v3.5a1.25 1.25 0 1 0 2.5 0v-3.5C11 5.56 10.44 5 9.75 5z" />
						</svg>

					</a>
				</div>

				<a className={"d-" + "block "} /* onClick={() =>play()} */>
					<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-caret-right-square-fill" viewBox="0 0 16 16">
						<path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm5.5 10a.5.5 0 0 0 .832.374l4.5-4a.5.5 0 0 0 0-.748l-4.5-4A.5.5 0 0 0 5.5 4v8z" />
					</svg>
				</a>

			</div>
		</div>
	);
};

export default Home;
