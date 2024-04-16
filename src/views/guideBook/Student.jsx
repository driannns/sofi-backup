import { MainLayout } from "../layouts/MainLayout";
import studentGuideBook from "../../assets/documents/guide_book/mahasiswaguide.pdf";
import { useState } from "react";

export function GuideStudent() {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const formatDateTime = () => {
    const [year, month, day] = date.split("-");
    const [hours, minutes] = time.split(":");

    // Create a new Date object with the parsed values in the local time zone
    const formattedDate = new Date(
      Date.UTC(year, month - 1, day, hours, minutes)
    );
    // formattedDate.setHours(formattedDate.getHours() + 7);

    // Get the ISO string representation of the date with the local time zone offset
    const isoString = formattedDate.toISOString().slice(0, 16) + ":00Z";

    // Return the formatted date string
    console.log(date, time);
    console.log(isoString);
    return isoString;
    return isoString;
    // const combinedDateTime = moment.utc(`${date} ${time}`, "YYYY-MM-DD HH:mm");
    // console.log(date, time);
    // return combinedDateTime.format("YYYY-MM-DDTHH:mm:00Z");
  };

  return (
    <MainLayout>
      <ol class="breadcrumb mb-0">
        <div class="col-12">
          <h3>GUIDE BOOK</h3>
          <hr class="mt-0" />
          <h6 class="mb-3">
            <a href="{{ route('home') }}" class="text-dark">
              BERANDA
            </a>{" "}
            / GUIDE BOOK
          </h6>
          <div>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
            <input
              type="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
            />
            <button onClick={() => console.log(formatDateTime())}>
              Submit
            </button>
          </div>
          <a
            href={studentGuideBook}
            download="guide_book_admin.pdf"
            type="button"
            class="btn btn-primary float-right"
          >
            Download
          </a>
        </div>
      </ol>
      <div class="container-fluid">
        <div class="animated fadeIn">
          {/* @include('flash::message') */}
          <div class="row">
            <div class="col-lg-12">
              <div class="card">
                <div class="card-header">
                  <div class="card-body">
                    <embed
                      type=""
                      src={studentGuideBook}
                      height="500px"
                      width="100%"
                    />
                    <div class="pull-right mr-3"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
