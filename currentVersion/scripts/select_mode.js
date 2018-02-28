var enter_select_mode = function (file_name, istable=false) {

    CURRENT_SELECTED = file_name;

    enter_select_image_view(CURRENT_SELECTED);
    enter_select_chart_view(CURRENT_SELECTED);
    select_row_in_table(CURRENT_SELECTED, istable);
}

var update_select_mode = function (file_name) {
}

var exit_select_mode = function () {

	CURRENT_SELECTED = "";

	exit_select_image_view();
	exit_select_chart_view();
	// select_row_in_table("NO SELECTED");
	TABLE.rows('.selected').deselect();

}

var update_views = function () {
	CURRENT_CASE_LIST = CURRENT_DATASET.map(function(d){return d["filename"];});

	update_chart_view(CURRENT_DATASET, "bar_chart", [CURRENT_ATTRIBUTE]);
	update_image_view(CURRENT_CASE_LIST);
}



