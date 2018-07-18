export class CompletedDownloadsService {
  InstanceCount = 0;
  compRunTotalCount = 0;
  identifiers = [];
  instanceName = '';
  notCompletedRunExeId = [];
  show;
  complete = 'Not Completed';

  addInstanceDownloads(rel: {'executionid': string, 'projectid': string, 'machineid': string}) {
    if (this.identifiers.length > 0) {
      const exe: any[] = [];
      for (const m of this.identifiers) {
        exe.push(m.executionid);
      }
      if (exe.indexOf(rel.executionid) === -1) {
        this.identifiers.push({'executionid': rel.executionid, 'projectid': rel.projectid, 'machineid': rel.machineid});
      }
    } else {
      this.identifiers.push({'executionid': rel.executionid, 'projectid': rel.projectid, 'machineid': rel.machineid});
    }
  }

  addInstanceAndTotalCount(total: number) {
    this.InstanceCount = total;
  }

  addStillRunningTotalCount(total: number) {
    this.compRunTotalCount = total;
  }

  andInstanceName(Instance: string) {
    this.instanceName = Instance;
  }

  addExeNotCompleted (exe: any[]) {
    for (const e of exe) {
      for (const f of this.identifiers)
      {
        if (f.executionid === e) {
          this.notCompletedRunExeId.push({'executionid': e, 'projectid': f.projectid});
        }
      }
    }
  }

  clearCompleteNotClosed () {
    this.notCompletedRunExeId.length = 0;
  }

  clear() {
    this.InstanceCount = 0;
    this.notCompletedRunExeId.length = 0;
    this.compRunTotalCount = 0;
    this.identifiers.length = 0;
    this.instanceName = '';
  }

  setShow(t: boolean) {
    this.show = t;
  }

  setComplete(c: string) {
    this.complete = c;
  }

  getExecutionNotCompleted(exe: any) {
    const d = exe.slice(0);
    if (this.identifiers.length > 0) {
      for (const c of this.identifiers) {
        const num = d.indexOf(c.executionid);
        if (num !== -1) {
          d.splice(num, 1);
        }
      }
      return d;
    } else {
      return exe;
    }
  }
}
