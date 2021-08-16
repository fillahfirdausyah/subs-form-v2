import React from "react";

// Asset
import "./style.css";

function Form() {
  return (
    <div className="client-form-wrapper">
      <div className="client-form">
        {/* Jenis Permintaan */}
        <div className="card">
          <div className="card-header">
            <h4>Jenis Permintaan</h4>
          </div>
          <div className="card-body">
            <form>
              <div className="mb-3">
                <label className="form-label">Nama Perusahaan</label>
                <input type="text" className="form-control" />
              </div>
              <div className="mb-3">
                <label className="form-label">Nama Perusahaan</label>
                <input type="text" className="form-control" />
              </div>
            </form>
          </div>
        </div>

        {/* Informasi Perusahaan Pelanggan */}
        <div className="card">
          <div className="card-header">
            <h4>Informasi Perusahaan Pelanggan</h4>
          </div>
          <div className="card-body">
            <form>
              <div className="mb-3">
                <label className="form-label">Nama Perusahaan</label>
                <input type="text" className="form-control" />
              </div>
              <div className="mb-3">
                <label className="form-label">Group Perusahaan</label>
                <input type="text" className="form-control" />
                <div className="form-text">{"*)"} Opsional</div>
              </div>
              <div className="mb-3">
                <label className="form-label">Jenis usaha</label>
                <input type="text" className="form-control" />
              </div>
              <div className="mb-3">
                <label className="form-label">Alamat</label>
                <textarea className="form-control"></textarea>
              </div>
              <div className="mb-3">
                <div className="row">
                  <div className="col">
                    <label className="form-label">Kota</label>
                    <input type="text" className="form-control" />
                  </div>
                  <div className="col">
                    <label className="form-label">Kode Pos</label>
                    <input type="text" className="form-control" />
                  </div>
                </div>
              </div>
              <div className="mb-3">
                <label className="form-label">Provinsi</label>
                <input type="text" className="form-control" />
              </div>
              <div className="mb-3">
                <label className="form-label">Alamat Situs</label>
                <input type="text" className="form-control" />
                <div className="form-text">{"*)"} Opsional</div>
              </div>
              <div className="mb-3">
                <label className="form-label">Alamat Email</label>
                <input type="text" className="form-control" />
              </div>
              <div className="mb-3">
                <label className="form-label">NPWP</label>
                <input type="text" className="form-control" />
              </div>
              <div className="mb-3">
                <label className="form-label">Telephone</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Kode Area / Nomor"
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Fax</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Kode Area / Nomor"
                />
                <div className="form-text">{"*)"} Opsional</div>
              </div>
            </form>
          </div>
        </div>

        {/* Penanggun Jawab Perusahaan */}
        <div className="card">
          <div className="card-header">
            <h4>Penanggung Jawab Perusahaan</h4>
          </div>
          <div className="card-body">
            <form>
              <div className="mb-3">
                <label className="form-label">Nama</label>
                <input type="text" className="form-control" />
              </div>
              <div className="mb-3">
                <label className="form-label">Tempat Tanggal Lahir</label>
                <div className="row">
                  <div className="col">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Tempat"
                    />
                  </div>
                  <div className="col">
                    <input type="date" className="form-control" />
                  </div>
                </div>
              </div>
              <div className="mb-3">
                <label className="form-label">Jabatan</label>
                <input type="text" className="form-control" />
              </div>
              <div className="mb-3">
                <label className="form-label">Telephone</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Kode Area / Nomor"
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Kartu Indentitas</label>
                <input type="radio" />
              </div>
              <div className="mb-3">
                <label className="form-label">No. Kartu Identitas</label>
                <input type="text" className="form-control" />
              </div>
              <div className="mb-3">
                <label className="form-label">Masa Berlaku</label>
                <div className="row">
                  <div className="col">
                    <select className="form-select" name="" id="">
                      <option value="">Pilih</option>
                      <option value="">Seumur Hidup</option>
                      <option value="">Tanggal</option>
                    </select>
                  </div>
                  <div className="col">
                    <input type="date" className="form-control" />
                  </div>
                </div>
              </div>
              <div className="mb-3">
                <label className="form-label">Alamat Email</label>
                <input type="text" className="form-control" />
              </div>
            </form>
          </div>
        </div>

        {/* Penanggung Jawab Keuangan */}
        <div className="card">
          <div className="card-header">
            <h4>Penanggung Jawab Keuangan</h4>
          </div>
          <div className="card-body">
            <form>
              <div className="mb-3">
                <label className="form-label">Nama</label>
                <input type="text" className="form-control" />
              </div>
              <div className="mb-3">
                <label className="form-label">Bagian</label>
                <input type="text" className="form-control" />
              </div>
              <div className="mb-3">
                <label className="form-label">Jabatan</label>
                <input type="text" className="form-control" />
              </div>
              <div className="mb-3">
                <label className="form-label">Telephone</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Kode Area / Nomor"
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Fax</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Kode Area / Nomor"
                />
                <div className="form-text">{"*)"} Opsional</div>
              </div>
              <div className="mb-3">
                <label className="form-label">Alamat Email</label>
                <input type="text" className="form-control" />
              </div>
            </form>
          </div>
        </div>

        {/* Alamat Penagihan */}
        <div className="card">
          <div className="card-header">
            <h4>Alamat Penagihan</h4>
          </div>
          <div className="card-body">
            <form>
              <div className="mb-3">
                <textarea className="form-control"></textarea>
              </div>
            </form>
          </div>
        </div>

        {/* Penanggung Jawab Teknis */}
        <div className="card">
          <div className="card-header">
            <h4>Penanggung Jawab Teknis</h4>
          </div>
          <div className="card-body">
            <form>
              <div className="mb-3">
                <label className="form-label">Nama</label>
                <input type="text" className="form-control" />
              </div>
              <div className="mb-3">
                <label className="form-label">Bagian</label>
                <input type="text" className="form-control" />
              </div>
              <div className="mb-3">
                <label className="form-label">Jabatan</label>
                <input type="text" className="form-control" />
              </div>
              <div className="mb-3">
                <label className="form-label">Telephone</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Kode Area / Nomor"
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Handphone</label>
                <input type="text" className="form-control" />
              </div>
              <div className="mb-3">
                <label className="form-label">Fax</label>
                <input type="text" className="form-control" />
                <div className="form-text">{"*)"} Opsional</div>
              </div>
              <div className="mb-3">
                <label className="form-label">Alamat Email</label>
                <input type="text" className="form-control" />
              </div>
            </form>
          </div>
        </div>

        {/* Layanan Yang Diminta */}
        <div className="card">
          <div className="card-header">
            <h4>Layanan Yang Diminta</h4>
          </div>
          <div className="card-body">
            <form>
              <div className="mb-3">
                <label className="form-label">Jenis Layanan</label>
                <input type="radio" className="form-control" />
              </div>
              <div className="mb-3">
                <label className="form-label">Spesifikasi Layanan</label>
                <input type="text" className="form-control" />
              </div>
              <div className="mb-3">
                <label className="form-label">Informasi Tambahan</label>
                <input type="text" className="form-control" />
              </div>
            </form>
          </div>
        </div>

        {/* Alamat Installasi */}
        <div className="card">
          <div className="card-header">
            <h4>Alamat Installasi</h4>
          </div>
          <div className="card-body">
            <form>
              <div className="mb-3">
                <textarea className="form-control"></textarea>
              </div>
            </form>
          </div>
        </div>

        {/* Tanda Tangan */}
        <div className="card">
          <div className="card-header">
            <h4>Tanda Tangan</h4>
          </div>
          <div className="card-body">
            <form>
              <div className="mb-3">
                <label className="form-label">Nama Perusahaan</label>
                <input type="text" className="form-control" />
              </div>
              <div className="mb-3">
                <label className="form-label">
                  Tanda Tangan Nama Perusahaan
                </label>
                <input type="file" className="form-control" />
              </div>
            </form>
          </div>
        </div>

        {/* Kelengkapan DOkumen */}
        <div className="card">
          <div className="card-header">
            <h4>Jenis Permintaan</h4>
          </div>
          <div className="card-body">
            <form>
              <div className="mb-3">
                <label className="form-label">Nama Perusahaan</label>
                <input type="text" className="form-control" />
              </div>
              <div className="mb-3">
                <label className="form-label">Nama Perusahaan</label>
                <input type="text" className="form-control" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form;
