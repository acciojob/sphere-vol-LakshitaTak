function getOutput(){
	let rad = document.getElementById("radius").value
  let volSphere = volume_sphere(rad)
  document.getElementById("volume").value = volSphere
}

function volume_sphere(r) {
    //Write your code here
	let vol = (4/3)*3.14*r*r*r
	return vol
} 
/* console.log(volume_sphere(3)) */


// window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
