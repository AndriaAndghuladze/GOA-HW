//1
class Specimen {
  constructor(id, type) {
    this.id = id;
    this.type = type;
  }

  getLabel() {
    return `Specimen ID: ${this.id}, Type: ${this.type}`;
  }
}

class MutantSpecimen extends Specimen {
  constructor(id, type, mutationLevel) {
    super(id, type);
    this.mutationLevel = mutationLevel;
  }

  getLabel() {
    return `Specimen ID: ${this.id}, Type: ${this.type}, Mutation Level: ${this.mutationLevel}`;
  }

  static mostMutated(arr) {
    return arr.reduce((max, specimen) =>
      specimen.mutationLevel > max.mutationLevel ? specimen : max
    );
  }
}

const s1 = new MutantSpecimen(1, "Blood", 5);
const s2 = new MutantSpecimen(2, "Tissue", 12);
const s3 = new MutantSpecimen(3, "Saliva", 8);

console.log(s1.getLabel());
console.log(MutantSpecimen.mostMutated([s1, s2, s3]).getLabel());

//2
class vehicle {
  constructor(speed, model) {
    this.speed = speed;
    this.model = model;
  }
  getInfo() {
    return `speed: ${this.speed}, model: ${this.model}`;
  }
}

class electric extends vehicle {
  constructor(speed, model, batarylife) {
    super(speed, model);
    this.batarty = batarylife;

  }

  getrnfo() {
    return `speed ${thise.speed} model ${this.model} battary ${this.batarylife}`;
  }
  static compearSpeed(v1, v2) {
    if (v1.speed > v2.speed) {
      return "v1 is faster";
    } else if (v2.speed > v2.speed) {
      return "v2 is faster";
    } else {
      return 'both speed ='
    }
  }
}

const elecCar = new electric(2000, 200, 'BMW m3 e30')

console.log(elecCar.getInfo())


//3
class Agent {
    constructor(name, version) {
        this.name = name;
        this.version = version;
    }

    getStatus() {
        return `Agent: ${this.name}, Version: ${this.version}`;
    }
}

class FieldAgent extends Agent {
    constructor(name, version, location) {
        super(name, version);
        this.location = location;
    }

    getStatus() {
        return `Agent: ${this.name}, Version: ${this.version}, Location: ${this.location}`;
    }
    
    static latestVersion(a1, a2) {
        return a1.version >= a2.version ? a1 : a2;
    }
}

const agent1 = new FieldAgent("Alpha", 1.2, "New York");
const agent2 = new FieldAgent("Bravo", 2.5, "London");

console.log(agent1.getStatus());
console.log(agent2.getStatus());

const latest = FieldAgent.latestVersion(agent1, agent2);
console.log(`Latest: ${latest.getStatus()}`);

