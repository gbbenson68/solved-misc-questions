'use strict'

// We use vanilla JavaScript here - it illustrates the example without needing jQuery.
let progressVal = 0
const progressDelta = 5
const progressMax = 100
let setIntervalID

// Update the progress bar
const updateProgressBar = (localProgressVal) => {
  const barElement = document.getElementById('progress-bar')
  const indElement = document.getElementById('progress-bar-value')
  barElement.value = localProgressVal
  indElement.innerHTML = `Completed: ${localProgressVal}%`
}

// Sets the increment and executes update
const incrementProgressBar = () => {
  if (progressVal >= progressMax) {
    stop()
  }
  updateProgressBar(progressVal)
  progressVal += progressDelta
}

// Stop for progress bar
const stop = () => clearInterval(setIntervalID)

document.body.innerHTML = `<h1>Example Progress Bar</h1>
                           <progress id='progress-bar' value='0' max='100'></progress>
                           </br>
                           <h4 id='progress-bar-value'>Completed: 0%</h4>`

// On load, start incrementing of progress bar, once every 2 seconds.
setIntervalID = setInterval(() => incrementProgressBar(), 2000)
