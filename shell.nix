{ pkgs ? import <nixpkgs> {} }:

pkgs.mkShell {
	buildInputs = with pkgs; [
		nodejs-16_x
		(pkgs.yarn.override {
			nodejs = pkgs.nodejs-16_x;
		})
	];
}

