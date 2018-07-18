export class InstanceCountService {
  InstanceCount = [];
  label = [];
  count = [];
  instance = [];
  show;
  bg = [];
  executionidList = [];
  list = [];

  addInstance(rel: {'data': number, 'label': string}) {
    this.label.push(rel.label);
    this.count.push(rel.data);
    this.instance.push({'label': rel.label, 'data': rel.data});
  }

  addExecutionIdList(rel: {'instance': string, 'exeList': any}) {
    this.executionidList.push({'instance': rel.instance, 'exeList': rel.exeList});
  }

  addChartData() {
    const b = [];
    for (const n of this.label)
    {
      b.push(this.getRandomColor());
    }
    this.bg.push({'backgroundColor': b});
    this.InstanceCount.push({'label': 'Total Count', 'data': this.count});
  }

  getRandomColor() {
    const letters = '0123456789abcdef'.split('');
    let color = '#';
    for (let i = 0; i < 6; i++ ) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  clearInstance() {
    this.InstanceCount.length = 0;
    this.label.length = 0;
    this.count.length = 0;
    this.instance.length = 0;
    this.bg.length = 0;
  }
  setShow(value: boolean) {
    this.show = value;
  }

  getCount(instance: string) {
    let i = 0;
    this.instance.forEach(value => {
      if (value.label === instance) {
        i = value.data;
      }
    });
    return i;
  }

  getExecutionList(instance: string) {
    console.log(instance)
    this.executionidList.forEach(value => {
      if (value.instance === instance) {
        this.list = value.exeList;
      }
    });
    return this.list;
  }
}
