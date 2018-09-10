export class RelabelSprintService {

  sprint = [];
  label = [];
  show = false;

  addInstance(rel: {'Issue': string, 'Summary': string, 'Description': string, 'Label': string}) {
    this.sprint.push(rel);
  }

  addLabel(rel: string) {
    this.label.push(rel);
  }

  clearInstance() {
    this.sprint.length = 0;
    this.label.length = 0;
  }

  setShow(value: boolean) {
    this.show = value;
  }

  findItem(issue: string) {
    let i = 0;
    for (const ar of this.sprint) {
      if (ar.Issue === issue) {
        return i;
      } else {
        i = i++;
      }
    }
  }

  removeItem(issue: string) {
    this.sprint.splice(this.findItem(issue), 1);
  }
}
