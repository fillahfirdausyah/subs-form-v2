import React from "react";

// Asset
import "./style.css";

// Image
import Logo from "../../Assets/BuanaLintas.png";
// Component
import {
  Authorized,
  AuthorizedFinance,
  AuthorizedTechnical,
  BillingAddress,
  CompanyInformation,
  Content,
  FilledBy,
  Information,
  InstallationAddress,
  ServiceOrder,
  Signs,
  SubscriptionFee,
  TypeofOrder,
} from "./parts";

function Template({ data, id }) {
  return (
    <div className="pdf">
      <header>
        <img src={Logo} alt="Logo_Buana_Lintas_Media" />
        <p>
          PT. BUANA LINTAS MEDIA
          <br />
          Bamboo Estate Kav 10 RT 009/ RW 033 Tapanrejo Tajem Maguwoharjo Depok,
          <br />
          Sleman, D.I, Yogyakarta 55282, Indonesia.
          <br />
          Telp. : +62-274-4361352
          <br />
          Email : Info@buanalintas.co.id, Web : http://www.buanalintas.co.id
        </p>
      </header>
      <section>
        <div className="section1">
          <p>
            FORMULIR PENDAFTARAN BERLANGGANAN (Subscription Form)
            <br />
            SOFTWARE & INTERNET SERVICE PROVIDER
          </p>
        </div>
        {data.map((x) => (
          <Content>
            <span className="font-bold">Isi dengan huruf cetak</span>{" "}
            <span className="font-italic">/ Fill In with capital letter</span>
            <br />
            <span className="font-bold">
              Beri tanda ✓ pada kotak pilihan
            </span>{" "}
            <span className="font-italic">
              / Please tick in appropriate box
            </span>
            {/* Information */}
            <Information data={x.information} />
            <div className="field">
              {/* TypeofOrder */}
              <TypeofOrder id={id} />

              {/* Informasi Perusahaan */}
              <CompanyInformation data={x.companyInformation} />

              {/* Authorized */}
              <Authorized data={x.authorized} id={id} />

              {/* Penanggung Jawab Keuangan */}
              <AuthorizedFinance data={x.authorizedFinance} />

              {/* Billing Address */}
              <BillingAddress data={x.billingAddress} />

              {/* Penanggung Jawab Teknis */}
              <AuthorizedTechnical data={x.authorizedTechnical} />

              {/* Layanan Yang Diminta */}
              <ServiceOrder data={x.serviceOrder} id={id} />

              {/* Alamat Installastion */}
              <InstallationAddress data={x.installationAddress} />

              {/* Biayan Berlangganan */}
              <SubscriptionFee data={x.subscriptionFee} />

              <div className="terms-and-conditions new-page">
                <div className="section1">
                  <p>
                    FORMULIR PENDAFTARAN BERLANGGANAN (Subscription Form)
                    <br />
                    SOFTWARE & INTERNET SERVICE PROVIDER
                  </p>
                </div>
                <table>
                  <thead>
                    <th colSpan="2">
                      <span className="font-bold">SYARAT DAN KETENTUAN</span>{" "}
                      <span className="font-italic">
                        / Terms And Conditions
                      </span>
                    </th>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <p>1.</p>
                      </td>
                      <td>
                        <p>
                          Biaya berlangganan belum termasuk pajak / Subscription
                          fee does not include taxesx
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p>2.</p>
                      </td>
                      <td>
                        <p>
                          Biaya relokasi, biaya perijinan gedung dan biaya-biaya
                          lain yang dikenakan oleh pihak ketiga dalam proses
                          kegiatan instalasi, ditanggung oleh PELANGGAN. /
                          Relocation costs, building permit fees and other costs
                          charged by third parties in the process of
                          installation, paid by the CUSTOMER.
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p>3.</p>
                      </td>
                      <td>
                        <p>
                          PELANGGAN wajib membayar Biaya Berlangganan
                          sebagaimana tercantum dalam Formulir Berlangganan ini,
                          paling lambat 7 (tujuh) hari kalender setelah menerima
                          berkas tagihan Buanalintas dengan cara ditransfer oleh
                          PELANGGAN dalam bentuk mata uang Rupiah ke rekening
                          PT. Buana Lintas Media dengan Nomor Rekening :
                          137-0005141748, Bank Mandiri Cabang Katamso
                          Yogyakarta, biaya transfer ditanggung oleh PELANGGAN.
                          / CUSTOMER shall pay the Subscription Fee as set forth
                          in this Subscription Form, no later than 7 (seven)
                          calendar days after receiving the invoice file with
                          transferred to Buanalintas by CUSTOMER in the Rupiah
                          currency to the account of PT. Buana Lintas Media with
                          Account Number: 137-0005141748, Bank Mandiri Cabang
                          Katamso Yogyakarta, transfer costs paid by the
                          CUSTOMER.
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p>4.</p>
                      </td>
                      <td>
                        <p>
                          Jangka waktu/kontrak berlangganan minimal selama 12
                          bulan, berlaku sejak diterbitkannya Berita Acara
                          Aktivasi (BAA). / Minimum subscription period for 12
                          months, effective from the the date of issuance
                          Minutes Activation (BAA).
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p>5.</p>
                      </td>
                      <td>
                        <p>
                          Apabila PELANGGAN melakukan pemutusan layanan sebelum
                          12 bulan setelah menandatangani Formulir Berlangganan
                          ini, maka dikenakan sanksi pembatalan sebesar 50% dari
                          total sisa biaya berlangganan dalam 12 bulan. / If
                          CUSTOMER terminate the service before 12 months after
                          signing the Subscription Form, it shall be liable to
                          cancellation of 50% of the total remaining cost of the
                          subscription within 12 months
                        </p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="undertaking">
                <table>
                  <thead>
                    <th colSpan="2">
                      <span className="font-bold">UNDERTAKING</span>
                    </th>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <p>
                          Dengan ini kami menyatakan bahwa data-data dan
                          informasi yang kami berikan di atas adalah benar
                          adanya. Kami telah memahami ketentuan dan
                          syarat-syarat berlangganan Jasa Buanalintas beserta
                          lampiran-lampirannya yang merupakan satu kesatuan yang
                          tak terpisahkan dengan Formulir Berlangganan ini.
                          Dengan menandatangani Formulir Berlangganan ini maka
                          dengan ini pula kami menyatakan menerima dan
                          menyetujui pemberlakukan Ketentuan Berlangganan Jasa
                          Buanalintas yang dimaksudkan ini tanpa kecuali.
                        </p>
                      </td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>
                        <p>
                          We hereby acknowledge that the information given
                          herein is true and correct. We have read and accept
                          the Terms and Conditions of Buanalintas Services,
                          including all attachment, which is an inseperable part
                          of this Subscription Form. By signing this
                          Subscription Form, we hereby acknowledge that we
                          accept and agree to be bound to the Buanalintas
                          Services Terms and Conditions without exception.
                        </p>
                      </td>
                      <td></td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Tanda Tangan */}
              <Signs clientSign={x.signs} filledBy={x.filledBy} />

              {/* Diisi Oleh */}
              <FilledBy data={x.filledBy} id={id} />
            </div>
          </Content>
        ))}
      </section>
    </div>
  );
}

export default Template;
