$('#inputCari').on('input',function(e){
    var valueCari = $('#inputCari').val();
		var pLoading = "<p class=\"subtitle\">Loading....</p>"

		var pRekomendasi = "<p class=\"subtitle\">Rekomendasi buat Kamu</p>"

		var aKawahPutih = `
		<a href=\"#\" id=\"kawahPutihCard\">
			<div class=\"card is-light margin-btn\">
				<div class=\"card-content\">
					<div class=\"media\" style=\"border:0px\">
						<div class=\"media-content\">
							<div class=\"columns\">
								<div class=\"column\">
									<figure class=\"image is-2by1\">
										<img src=\"/assets/img/tempat-wisata/kawah-putih.jpg\">
									</figure>
								</div>
								<div class=\"column txt-rght\">
									<p>tiket masuk</p>
									<p class=\"subtitle title-card\">Rp 0,-</p>
								</div>
							</div>
							<div class=\"columns\">
								<div class=\"column\">
									<p class=\"subtitle title-card\">Kawah Putih</p>
									<p>Sugihmukti Kecamatan Pasirjambu Bandung</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</a>
		`;

		var aGunungPadangCiwidey =`
		<a href=\"#\" id=\"gunungPadangCiwideyCard\">
			<div class=\"card is-light margin-btn\">
				<div class=\"card-content\">
					<div class=\"media\" style=\"border:0px\">
						<div class=\"media-content\">
							<div class=\"columns\">
								<div class=\"column\">
									<figure class=\"image is-2by1\">
										<img src=\"/assets/img/tempat-wisata/gunung-padang-ciwidey.jpg\">
									</figure>
								</div>
								<div class=\"column txt-rght\">
									<p>tiket masuk</p>
									<p class=\"subtitle title-card\">Rp 0,-</p>
								</div>
							</div>
							<div class=\"columns\">
								<div class=\"column\">
									<p class=\"subtitle title-card\">Gunung Padang Ciwidey</p>
									<p>Wangunsari, Sindangkerta, Kabupaten Bandung Barat</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</a>
		`;

		var aGedungSate = `
		<a href=\"#\" id=\"gedungSateCard\">
			<div class=\"card is-light margin-btn\">
				<div class=\"card-content\">
					<div class=\"media\" style=\"border:0px\">
						<div class=\"media-content\">
							<div class=\"columns\">
								<div class=\"column\">
									<figure class=\"image is-2by1\">
										<img src=\"/assets/img/tempat-wisata/bandung.jpg\">
									</figure>
								</div>
								<div class=\"column txt-rght\">
									<p>tiket masuk</p>
									<p class=\"subtitle title-card\">Rp 0,-</p>
								</div>
							</div>
							<div class=\"columns\">
								<div class=\"column\">
									<p class=\"subtitle title-card\">Gedung Sate</p>
									<p>Jalan Diponegoro No.1 Bandung</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</a>
		`;

		var aGedungSate = `
		<a href=\"#\" id=\"gedungSateCard\">
			<div class=\"card is-light margin-btn\">
				<div class=\"card-content\">
					<div class=\"media\" style=\"border:0px\">
						<div class=\"media-content\">
							<div class=\"columns\">
								<div class=\"column\">
									<figure class=\"image is-2by1\">
										<img src=\"/assets/img/tempat-wisata/bandung.jpg\">
									</figure>
								</div>
								<div class=\"column txt-rght\">
									<p>tiket masuk</p>
									<p class=\"subtitle title-card\">Rp 0,-</p>
								</div>
							</div>
							<div class=\"columns\">
								<div class=\"column\">
									<p class=\"subtitle title-card\">Gedung Sate</p>
									<p>Jalan Diponegoro No.1 Bandung</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</a>
		`;

		var aStasiunBandung = `
		<a href=\"#\" id=\"stasiunBandungCard\">
			<div class=\"card is-light margin-btn\">
				<div class=\"card-content\">
					<div class=\"media\" style=\"border:0px\">
						<div class=\"media-content\">
							<div class=\"columns\">
								<div class=\"column\">
									<figure class=\"image is-2by1\">
										<img src=\"/assets/img/tempat-wisata/stasiun-bandung.jpg\">
									</figure>
								</div>
								<div class=\"column txt-rght\">
								</div>
							</div>
							<div class=\"columns\">
								<div class=\"column\">
									<p class=\"subtitle title-card\">Stasiun Bandung</p>
									<p>Jl. Stasiun Barat, Kb. Jeruk, Kec. Andir, Kota Bandung</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</a>
		`;

		if (valueCari == "") {
			$("#isiCard").empty();
			$("#isiCard").append(pRekomendasi);
			$("#isiCard").append(aKawahPutih);
			$("#isiCard").append(aGunungPadangCiwidey);
		} else if (valueCari == "g") {
			$("#isiCard").empty();
			$("#isiCard").append(aGunungPadangCiwidey);
			$("#isiCard").append(aGedungSate);

			$("#showModal").click(function() {
	      $("#modalTambahObjekWisata").addClass("is-active")
	    })

	    $("#closeModal").click(function() {
	      $("#modalTambahObjekWisata").removeClass("is-active")
	    })


	    $("#gedungSateCard").click(function() {
	      $("#modalInputWaktu").addClass("is-active")
	      $("#modalTambahObjekWisata").removeClass("is-active")
	    })

	    $("#closeModal2").click(function() {
	      $("#modalInputWaktu").removeClass("is-active")
	    })
		} else if (valueCari == "s" || valueCari == "S" || valueCari == "st" || valueCari == "St" || valueCari == "sta" || valueCari == "Sta") {
			$("#isiCard").empty();
			$("#isiCard").append(aStasiunBandung);

			$("#showModal").click(function() {
	      $("#modalTambahObjekWisata").addClass("is-active")
	    })

	    $("#closeModal").click(function() {
	      $("#modalTambahObjekWisata").removeClass("is-active")
	    })


	    $("#stasiunBandungCard").click(function() {
	      $("#modalInputWaktu").addClass("is-active")
	      $("#modalTambahObjekWisata").removeClass("is-active")
	    })

	    $("#closeModal2").click(function() {
	      $("#modalInputWaktu").removeClass("is-active")
	    })
		} else if (valueCari == "ge" || valueCari == "Ge" || valueCari == "ged" || valueCari == "Ged") {
			$("#isiCard").empty();
			$("#isiCard").append(aGedungSate);

			$("#showModal").click(function() {
	      $("#modalTambahObjekWisata").addClass("is-active")
	    })

	    $("#closeModal").click(function() {
	      $("#modalTambahObjekWisata").removeClass("is-active")
	    })


	    $("#gedungSateCard").click(function() {
	      $("#modalInputWaktu").addClass("is-active")
	      $("#modalTambahObjekWisata").removeClass("is-active")
	    })

	    $("#closeModal2").click(function() {
	      $("#modalInputWaktu").removeClass("is-active")
	    })
		} else {
			$("#isiCard").empty();
			$("#isiCard").append(pLoading);
		}
});
