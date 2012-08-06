{{#columns}}
<div id="{{id}}" class="column">
	{{#projects}}
	<div class="project-block" data-color="{{color}}">
		<img src="img/{{image}}" />
		<div class="description">
			<h1>{{title}}</h1> 
			<span class="arrow"></span>
			<h2>{{type}}</h2>
		</div>
	</div>
	{{/projects}} 
</div>
{{/columns}}