export class HeatMapService {

  label = [];
  data = [];
  show = false;

  addInstance(rel: {'data': number, 'label': string}) {
    console.log(rel.data);
    this.label.push(rel.label);
    this.data.push((rel.data));
  }

  clearInstance() {
    this.label.length = 0;
    this.data.length = 0;
  }

  setShow(value: boolean) {
    console.log(value);
    this.show = value;
  }
}
