export class HeatMapService {

  label = [];
  data = [];
  show = false;

  addInstance(rel: {'data': number, 'label': string}) {
    this.label.push(rel.label);
    this.data.push((rel.data));
  }

  clearInstance() {
    this.label.length = 0;
    this.data.length = 0;
  }

  setShow(value: boolean) {
    this.show = value;
  }
}
