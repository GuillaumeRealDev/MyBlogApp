export class Player {
  id: number = 0
  firstName: string = ''
  lastName: string = ''
  description: string = ''
  created: Date = new Date()
  modified: Date = new Date()
  deleted: string | null = null
}

export class PlayerData {
  players: Player[] = [
    {
      id: 1,
      firstName: 'Air',
      lastName: 'Jordanesque', // Inspired by Michael Jordan
      description: 'Slam dunks like a champion and owns everybody.',
      created: new Date(Date.now().toLocaleString()),
      modified: new Date(Date.now().toLocaleString()),
      deleted: null
    },
    {
      id: 2,
      firstName: 'Kareem',
      lastName: 'AbdulJabbaryParker',
      description: "Has a skyhook that's unstoppable.",
      created: new Date(Date.now().toLocaleString()),
      modified: new Date(Date.now().toLocaleString()),
      deleted: null
    },
    {
      id: 3,
      firstName: 'Larry',
      lastName: 'Legend', // Inspired by Larry Bird ("Hick from French Lick")
      description:
        'Sinks clutch threes with a flick of his wrist. Might surprise you with his trash talk.',
      created: new Date(Date.now().toLocaleString()),
      modified: new Date(Date.now().toLocaleString()),
      deleted: null
    },
    {
      id: 4,
      firstName: 'Steph',
      lastName: 'Currylicious', // Inspired by Stephen Curry
      description:
        'Rains down three-pointers from anywhere on the court. Has a killer crossover and handles. Was called the baby faced assassin',
      created: new Date(Date.now().toLocaleString()),
      modified: new Date(Date.now().toLocaleString()),
      deleted: null
    }
  ]
}
