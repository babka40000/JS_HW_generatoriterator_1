import Team from '../index';

const team1 = new Team();

team1.add({
  name: 'Лучник',
  type: 'Bowman',
  health: 50,
  level: 1,
  attack: 40,
  defence: 10,
});

team1.add({
  name: 'Мечник',
  type: 'Swordsman',
  health: 100,
  level: 2,
  attack: 20,
  defence: 30,
});

test('check iterable', () => {
  let index = 0;
  for (const teamMate of team1) {
    expect(teamMate).toBe(team1.chars[index]);
    index += 1;
  }
});
