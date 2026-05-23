const { Plugin, Notice } = require("obsidian");

module.exports = class NewNoteRibbonPlugin extends Plugin {
  async onload() {
    this.addRibbonIcon("square-pen", "\u041d\u043e\u0432\u0430\u044f \u0437\u0430\u043c\u0435\u0442\u043a\u0430", async () => {
      try {
        await this.app.commands.executeCommandById("file-explorer:new-file");
      } catch (error) {
        console.error(error);
        new Notice("\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u0441\u043e\u0437\u0434\u0430\u0442\u044c \u0437\u0430\u043c\u0435\u0442\u043a\u0443");
      }
    });
  }
};
