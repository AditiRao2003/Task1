"use client";
import Link from "next/link";
import React, { useState } from "react";
import { TiHome } from "react-icons/ti";
import { BsPlus } from "react-icons/bs";

const NavbarSection = () => {
  const [active, setActive] = useState("About us");
  const [dropdown, setDropdown] = useState(null);
  const [subDropdown, setSubDropdown] = useState(null);
  const [subSubDropdown, setSubSubDropdown] = useState(null);

  const menuItems = [
    { name: "", href: "/", icon: <TiHome className="text-2xl" /> },
    {
      name: "About us",
      href: "/aboutus",
      subMenu: [
        { name: "From CGDA's Desk", href: "/from-cgdas-desk" },
        { name: "About DAD", href: "/about-dad" },
        { name: "About Defence Finance", href: "/about-defence-finance" },
        { name: "Who's Who", href: "/whos-who" },
        { name: "Landmarks of DAD", href: "/landmarks-of-dad" },
        { name: "Roll of Honor (CGDA)", href: "/roll-of-honor-cgda" },
        { name: "Citizen's Charter", href: "/citizens-charter" },
        { name: "Chief Vigilance Officer (CVO)", href: "/cvo" },
      ],
    },
    {
      name: "Division",
      href: "/Division",
      subMenu: [
        {
          name: "Admin",
          href: "admin",
          icon: <BsPlus />,
          subItems: [
            {
              name: "IDAS",
              href: "/idas",
              icon: <BsPlus />,
              subsubItems: [
                { name: "IPR SAOs-2022 ", href: "/idas/civil-list" },
                { name: "ER Sheet", href: "/idas/civil-list" },
                { name: "IPR", href: "/idas/ipr", icon: <BsPlus /> },
                { name: "Transfer Policy ", href: "/idas/transferpolicy" },
                { name: "Recruitment Rules ", href: "/idas/recruitmentrules" },
              ],
            },
            {
              name: "Sparrow",
              href: "/sparrow",
              icon: <BsPlus />,
              subsubItems: [
                { name: "ER Sheet", href: "/idas/civil-list" },
                { name: "IPR", href: "/idas/ipr", icon: <BsPlus /> },
                { name: "Transfer Policy ", href: "/idas/transferpolicy" },
                { name: "Recruitment Rules ", href: "/idas/recruitmentrules" },
                { name: "IPR SAOs-2022 ", href: "/idas/civil-list" },
              ],
            },
            { name: "Guest House", href: "/guestHouse" },
            { name: "JCM ", href: "/idas" },
            { name: "Roaster ", href: "/roaster" },
            { name: "IPR SAOs-2022 ", href: "/IPR-SAOs-2022r" },
          ],
        },
        {
          name: "Accounts",
          href: "accounts",
          icon: <BsPlus />,
          subItems: [
            {
              name: "IDAS",
              href: "/idas",
              icon: <BsPlus />,
              subsubItems: [
                { name: "Civil list", href: "/idas/civil-list" },
                { name: "ER Sheet", href: "/idas/civil-list" },
                { name: "IPR", href: "/idas/ipr", icon: <BsPlus /> },
                { name: "Transfer Policy ", href: "/idas/transferpolicy" },
              ],
            },
            {
              name: "Sparrow",
              href: "/sparrow",
              icon: <BsPlus />,
              subsubItems: [
                { name: "Civil list", href: "/idas/civil-list" },
                { name: "ER Sheet", href: "/idas/civil-list" },
              ],
            },
            { name: "Guest House", href: "/guestHouse" },
            {
              name: "JCM ",
              href: "/idas",
              icon: <BsPlus />,
              subsubItems: [
                { name: "Civil list", href: "/idas/civil-list" },
                { name: "ER Sheet", href: "/idas/civil-list" },
                { name: "IPR", href: "/idas/ipr", icon: <BsPlus /> },
                { name: "Transfer Policy ", href: "/idas/transferpolicy" },
                { name: "Recruitment Rules ", href: "/idas/recruitmentrules" },
              ],
            },
            { name: "Roaster ", href: "/roaster" },
            {
              name: "IPR SAOs-2022 ",
              href: "/IPR-SAOs-2022r",
              icon: <BsPlus />,
            },
          ],
        },
        {
          name: "Audit",
          href: "audit",
          icon: <BsPlus />,
          subItems: [
            {
              name: "Mandate & charter of audit",
              href: "/idas",
              icon: <BsPlus />,
            },
            {
              name: "Existing Scope of Audit by DAD",
              href: "/sparrow",
              icon: <BsPlus />,
            },
            { name: "Types od audit", href: "/guestHouse" },
            { name: "Product of IA", href: "/idas" },
          ],
        },
        {
          name: "Pension",
          href: "pension",
          icon: <BsPlus />,
          subItems: [
            {
              name: "SPARSH",
              href: "/idas",
              icon: <BsPlus />,
            },
            {
              name: "Pension",
              href: "/sparrow",
              icon: <BsPlus />,
            },
            { name: "New Pension scheure", href: "/guestHouse" },
            { name: "Pasion Orders per 2006", href: "/idas" },
          ],
        },
        {
          name: "IFA",
          href: "ifa",
          icon: <BsPlus />,
          subItems: [
            {
              name: "Evolution",
              href: "/idas",
              icon: <BsPlus />,
            },
            {
              name: "Posting of IPA'S",
              href: "/sparrow",
              icon: <BsPlus />,
            },
            { name: "IFA Circulars", href: "/guestHouse" },
          ],
        },
        {
          name: "HRD",
          href: "hrd",
          icon: <BsPlus />,
          subItems: [
            {
              name: "Training",
              href: "/idas",
            },
            {
              name: "Departmental",
              href: "/sparrow",
              icon: <BsPlus />,
              subsubItems: [
                { name: "Training Policy", href: "/idas/civil-list" },
                { name: "Training Material", href: "/idas/civil-list" },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "RTI",
      href: "/rti",
      subMenu: [
        { name: "Suo moto Disclosures", href: "suomotoDisclosures" },
        { name: "RTI Circulars & Orders", href: "rti-circulars-orders" },
        { name: "CPIOs in DAD", href: "cpios-in-dad" },
        { name: "Citizen's Charter", href: "citizen-charter" },
        { name: "RTI Act 2005", href: "rti-act" },
      ],
    },
    { name: "Rules Codes & Manuals", href: "/rulesCodeManuals" },
    {
      name: "Notifications",
      href: "/notifications",
      subMenu: [
        { name: "Circulars & Orders", href: "/circulars&orders" },
        { name: "Tenders", href: "/tenders" },
        { name: "DASCB", href: "/dascb" },
        { name: "GST", href: "/gst" },
        { name: "Download Form", href: "download-form" },
      ],
    },
    {
      name: "Media",
      href: "/media",
      subMenu: [
        { name: "Image & Video Gallery", href: "/image&video-gallery" },
        { name: "E-Books", href: "/e-books" },
      ],
    },
    {
      name: "Contact Us",
      href: "/contactus",
      subMenu: [
        { name: "CGDA", href: "/cgda" },
        { name: "External Links", href: "/external-link" },
      ],
    },
    { name: "राजभाषा कोना", href: "/rajbashacona" },
    { name: "Site Map", href: "/sitemap" },
    { name: "Pensioner's Portal", href: "/pensionerPortal" },
  ];

  return (
    <div className="p-0 m-0 ">
      <div className="shadow sticky z-50 top-0">
        <nav className="bg-[#000099] pb-4">
          <div className="flex flex-wrap justify-between items-center xl:max-w-screen-2xl lg:max-w-screen-xl md:max-w-screen-md sm:max-w-screen-sm">
            <div
              className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
              id="mobile-menu-2"
            >
              <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                {menuItems.map((item, index) => (
                  <li
                    key={index}
                    className="relative"
                    onMouseEnter={() => item.subMenu && setDropdown(index)}
                    onMouseLeave={() => setDropdown(null)}
                  >
                    <Link
                      href={item.href}
                      className={`block xl:px-2 lg:px-0 pt-1 pb-4 xl:text-[15px] lg:text-[13px] md:text-[12px] text-white hover:bg-[rgb(0,0,255)] hover:underline hover:underline-offset-4 hover:decoration-[1.5px] ${
                        active === item.name
                          ? "underline underline-offset-4 decoration-[1.5px]"
                          : ""
                      }`}
                      onClick={() => setActive(item.name)}
                    >
                      <span className="text-2xl ">{item.icon}</span> {item.name}
                    </Link>

                    {item.subMenu && dropdown === index && (
                      <div className="absolute left-0 mt-0 w-60 bg-[#00BFFF] z-10 shadow-lg">
                        <ul>
                          {item.subMenu.map((subItem, subIndex) => (
                            <li
                              key={subIndex}
                              className="relative group border-b border-gray-500 hover:bg-red-900 hover:underline hover:underline-offset-4"
                              onMouseEnter={() =>
                                subItem.subItems && setSubDropdown(subIndex)
                              }
                              onMouseLeave={() => setSubDropdown(null)}
                            >
                              <Link
                                href={subItem.href}
                                className="flex justify-start items-center px-3 py-4 text-[15px] text-white"
                              >
                                <span>{subItem.name}</span>
                                {subItem.icon && (
                                  <span className="text-red-900 text-lg group-hover:text-white">
                                    {subItem.icon}
                                  </span>
                                )}
                              </Link>

                              {subItem.subItems && subDropdown === subIndex && (
                                <div className="absolute left-full top-0 mt-0 w-60 bg-[#00BFFF] z-10">
                                  <ul>
                                    {subItem.subItems.map(
                                      (subSubItem, subSubIndex) => (
                                        <li
                                          key={subSubIndex}
                                          className="border-b border-gray-500 group hover:bg-red-900 hover:underline hover:underline-offset-4"
                                          onMouseEnter={() =>
                                            subSubItem.subsubItems &&
                                            setSubSubDropdown(subSubIndex)
                                          }
                                          onMouseLeave={() =>
                                            setSubSubDropdown(null)
                                          }
                                        >
                                          <Link
                                            href={subSubItem.href}
                                            className="flex justify-start items-center px-3 py-4 text-white "
                                          >
                                            <span className="text-[15px] ">
                                              {subSubItem.name}
                                            </span>
                                            {subSubItem.icon && (
                                              <span className="text-red-900 text-lg group-hover:text-white">
                                                {subSubItem.icon}
                                              </span>
                                            )}
                                          </Link>

                                          {subSubItem.subsubItems &&
                                            subSubDropdown === subSubIndex && (
                                              <div className="absolute left-full top-0 mt-0 w-60 bg-[#00BFFF] z-10">
                                                <ul>
                                                  {subSubItem.subsubItems.map(
                                                    (
                                                      subSubSubItem,
                                                      subSubSubIndex
                                                    ) => (
                                                      <li
                                                        key={subSubSubIndex}
                                                        className="border-b border-gray-500 group hover:bg-red-900 hover:underline hover:underline-offset-4"
                                                      >
                                                        <Link
                                                          href={
                                                            subSubSubItem.href
                                                          }
                                                          className="flex justify-start items-center px-3 py-4 text-white "
                                                        >
                                                          <span className="text-[15px] ">
                                                            {subSubSubItem.name}
                                                          </span>
                                                          {subSubSubItem.icon && (
                                                            <span className="text-red-900 text-lg group-hover:text-white">
                                                              {
                                                                subSubSubItem.icon
                                                              }
                                                            </span>
                                                          )}
                                                        </Link>
                                                      </li>
                                                    )
                                                  )}
                                                </ul>
                                              </div>
                                            )}
                                        </li>
                                      )
                                    )}
                                  </ul>
                                </div>
                              )}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <div className=" bg-blue-500 py-[4px]">
        <marquee className=" text-white text-[14px] font-[600]">
          <div className=" flex gap-16">
            <div className="flex gap-1">
              <img src="/Images/new.gif" className="h-6 w-10"></img>
              <p>
                Live Streaming of 11th All India DAD Badminton Tournament (Men &
                Women) at Lucknow w.e.f. 18th to 21st February,2025{" "}
              </p>
            </div>
            <div className="flex gap-1">
              <img src="/Images/new.gif" className="h-6 w-10"></img>
              <p> रक्षा लेखा महानियंत्रक का नववर्ष संदेश </p>
            </div>

            <div className="flex gap-1">
              <img src="/Images/new.gif" className="h-6 w-10"></img>
              <p>कार्यभार ग्रहण : रक्षा लेखा विशेष महानियंत्रक. </p>
            </div>
          </div>
        </marquee>
      </div>
    </div>
  );
};

export default NavbarSection;
