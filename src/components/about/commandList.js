import HIS from '../notes/hisData'

const commandList = {
  version: {
    description: 'Return this project version',
    messages: [
      { message: HIS[0].version }
    ]
  },

  contact: {
    description: 'How to contact author',
    messages: [
      { type: 'info', label: 'GitHub', message: 'https://github.com/xrkffgg' },
      { type: 'info', label: 'Email', message: 'xrkffgg@vip.qq.com' },
    ], 
  },

}

export default commandList
