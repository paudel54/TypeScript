class ProjectInput {
        templateElement:HTMLTemplateElement;
        hostElement:HTMLDivElement;
    constructor(){
        // typecast here to let know getElementById will return of that type
        this.templateElement = document.getElementById('project-input')! as HTMLTemplateElement;
        this.hostElement = document.getElementById('app')! as HTMLDivElement;

        const importedNode = document.importNode(this.templateElement.content, true);
    }

}