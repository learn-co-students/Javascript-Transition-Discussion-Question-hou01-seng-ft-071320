// $('#save_lincoln').click(()=>saveLincoln(parseInt($('#interval').val())))

// function saveLincoln(interval) {
//   if(isNaN(interval)) {
//     interval = 10000
//   }
//   $('#foreground').fadeOut(interval);
// }

const saveInterval = document.getElementById( 'interval' )
const startSaving = document.getElementById( 'save_lincoln' ).addEventListener( "click", () => ( saveLincoln( parseInt( saveInterval.value ) ) ) )
const zombieFace = document.getElementById( 'foreground' )
const hiddenMessage = document.getElementById( 'hidden-message' )

function saveLincoln( interval ) {
  if ( isNaN( interval ) ) {
    interval = 100
  }
  
}