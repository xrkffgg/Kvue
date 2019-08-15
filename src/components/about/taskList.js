// const USER_ID = parseInt(Math.random() * 1000)
function generateTime() {
  const timeNow = new Date();
  const hours = timeNow.getHours();
  const minutes = timeNow.getMinutes();
  const seconds = timeNow.getSeconds();
  let timeString = '' + hours;
  timeString += (minutes < 10 ? ':0' : ':') + minutes;
  timeString += (seconds < 10 ? ':0' : ':') + seconds;
  return timeString
}

const mockData = [
  { type: 'system', label: 'System',message: 'Welcome to Kvue. The following is a list of Self-introduction.' },
  { time: generateTime(), type: 'info', label: 'Name:', message: 'xrk' },
  { time: generateTime(), type: 'info', label: 'Sex:', message: 'Male' },
  { time: generateTime(), type: 'info', label: 'Age:', message: '18 forever' },
  { time: generateTime(), type: 'info', label: 'Alias:', message: 'xrkffgg' },
  { time: generateTime(), type: 'info', label: 'Email:', message: 'xrkffgg@gmail.com' },
  { time: generateTime(), type: 'info', label: 'Address:', message: 'beijing,China' },
  { time: generateTime(), type: 'info', label: 'Preferences:', message: 'Music Film Food WOW LOL Steam Beautiful things' },

]

const taskList = {
  // echo: {
  //   description: 'Echoes input',
  //   echo(pushToList, input) {
  //     input = input.split(' ')
  //     input.splice(0, 1)
  //     const p = new Promise(resolve => {
  //       pushToList({ time: generateTime(), label: 'Echo', type: 'success', message: input.join(' ') });
  //       resolve({ type: 'success', label: '', message: '' })
  //     })
  //     return p
  //   }
  // },
  defaultTask: {
    description: 'this is default task.',
    defaultTask(pushToList) {
      let i = 0;
      const p = new Promise(resolve => {
        const interval = setInterval(() => {
          pushToList(mockData[i]);
          i++
          if (!mockData[i]) {
            clearInterval(interval)
            resolve({ type: 'success', label: 'Done', message: 'It is Over!' })
          }
        }, 1000);
      })
      return p
    }
  },
  open: {
    description: 'Open a specified url in a new tab.',
    open(pushToList, input) {
      const p = new Promise((resolve, reject) => {
        let url = input.split(' ')[1]
        if (!url) {
          reject({ type: 'error', label: 'Error', message: 'a url is required!' })
          return
        }
        pushToList({ type: 'success', label: 'Success', message: 'Opening' })

        if (input.split(' ')[1].indexOf('http') === -1) {
          url = 'http://' + input.split(' ')[1]
        }
        window.open(url, '_blank')
        resolve({ type: 'success', label: 'Done', message: 'Page Opened!' })
      })
      return p;
    }
  }

}

export default taskList