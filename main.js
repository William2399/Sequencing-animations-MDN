const aliceTumbling = [
    { transform: 'rotate(0) scale(1)' },
    { transform: 'rotate(360deg) scale(0)' }
  ];
  
  const aliceTiming = {
    duration: 2000,
    iterations: 1,
    fill: 'forwards'
  }
  
  const alice1 = document.querySelector("#alice1");
  const alice2 = document.querySelector("#alice2");
  const alice3 = document.querySelector("#alice3");

//Callback Hell Example
/*alice1.animate(aliceTumbling, aliceTiming).finished.then(()=>{
    alice2.animate(aliceTumbling, aliceTiming).finished.then(()=>{
        alice3.animate(aliceTumbling, aliceTiming).finished;
    })
}); */

//Promise-Chain Example
/*alice1.animate(aliceTumbling, aliceTiming).finished
    .then(() => {return alice2.animate(aliceTumbling, aliceTiming).finished;})
    .then(() => {return alice3.animate(aliceTumbling, aliceTiming).finished;})
*/

//async and await
async function animateSVG() {
    await alice1.animate(aliceTumbling, aliceTiming).finished;
    await alice2.animate(aliceTumbling, aliceTiming).finished;
    await alice3.animate(aliceTumbling, aliceTiming).finished;
}

animateSVG();