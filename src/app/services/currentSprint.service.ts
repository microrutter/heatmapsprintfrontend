export class CurrentSprintService {

  sprint = [];
  show = false;

  addInstance(rel: {'Issue': string, 'Summary': string, 'Description': string, 'Label': string}) {
    this.sprint.push(rel);
  }

  clearInstance() {
    this.sprint.length = 0;
  }

  setShow(value: boolean) {
    console.log(value);
    this.show = value;
  }
}
