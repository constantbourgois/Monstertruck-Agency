var histo = history.state;

if (histo == null) {
	var page = location.pathname;
	window.location.href = "/../../../index.php?path="+page+"";

	
};
