export class ProjectService {
  projects = [];
  current = '';
  show = false;

  addProjects(rel: string) {
    this.projects.push(rel);
  }

  getShow() {
    return this.show;
  }

  getCurrent() {
    return this.current;
  }

  setCurrent(value: string) {
    this.current = value;
  }

  getProjects() {
    return this.projects;
  }

  clearInstance() {
    this.projects.length = 0;
    this.current = '';
  }

  setShow(value: boolean) {
    this.show = value;
  }
}
