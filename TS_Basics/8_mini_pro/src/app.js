var ProjectInput = /** @class */ (function () {
    function ProjectInput() {
        // typecast here to let know getElementById will return of that type
        this.templateElement = document.getElementById('project-input');
        this.hostElement = document.getElementById('app');
        var importedNode = document.importNode(this.templateElement.content, true);
    }
    return ProjectInput;
}());
