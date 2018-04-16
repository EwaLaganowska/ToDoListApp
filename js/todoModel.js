function TodoModel(description) {
    this.id = TodoModel.UID++;
    this.description = description;
    this.isCompleted = false;
}
TodoModel.UID = 1;