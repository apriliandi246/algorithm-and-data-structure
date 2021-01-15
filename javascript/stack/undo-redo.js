class UndoRedo {
      constructor(text) {
            this.text = text;
            this.dataUndo = [];
            this.dataRedo = [];
      }

      undo() {
            let text = this.text.split(' ');

            if (text.length > 0) {
                  this.dataUndo.push(text[text.length - 1]);
                  this.dataRedo.push(this.dataUndo.pop());
                  text.pop();
                  this.text = text.join(' ');

            } else {
                  return false;
            }
      }

      redo() {
            if (this.dataRedo.length !== 0) {
                  this.text = this.text + " " + this.dataRedo[this.dataRedo.length - 1];
                  this.dataUndo.push(this.dataRedo[this.dataRedo.length - 1]);
                  this.dataRedo.pop();

            } else {
                  return false;
            }
      }

      showData() {
            return this.text;
      }
}


const undoRedo = new UndoRedo("Lorem ipsum dolor sit amet, consectetundoRedo adipisicing elit. Commodi, voluptatibus!");

undoRedo.undo();
undoRedo.undo();
undoRedo.undo();
undoRedo.undo();
undoRedo.undo();
undoRedo.undo();
undoRedo.undo();
undoRedo.undo();
undoRedo.undo();
undoRedo.undo();

undoRedo.redo();
undoRedo.redo();
undoRedo.redo();
undoRedo.redo();
undoRedo.redo();

undoRedo.undo();

console.log(undoRedo.showData());