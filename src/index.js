export default class Team {
  constructor() {
    this.chars = [];
  }

  add(char) {
    this.chars.push(char);
  }
}

Team.prototype[Symbol.iterator] = function () {
  let current = 1;
  const last = this.chars.length;
  const data = this.chars;

  return {
    next() {
      if (current <= last) {
        current += 1;
        return {
          done: false,
          value: data[current - 2],
        };
      }

      return {
        done: true,
      };
    },
  };
};
