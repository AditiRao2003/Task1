"use client";
import Link from "next/link";
import React, { useState } from "react";
import { BsPlus } from "react-icons/bs";
import { HiPlusCircle } from "react-icons/hi";
import { TiHome } from "react-icons/ti";

const MobileViewNavbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdown, setDropdown] = useState(null);
  const [subDropdown, setSubDropdown] = useState(null);
  const [subSubDropdown, setSubSubDropdown] = useState(null);
  const [active, setActive] = useState("About us");

  const menuItems = [
    { name: "Home", href: "/" },
    {
      name: "About us",
      href: "/aboutus",
      icon: <HiPlusCircle />,
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
      icon: <HiPlusCircle />,
      subMenu: [
        {
          name: "Admin",
          href: "admin",
          icon: <HiPlusCircle />,
          subItems: [
            {
              name: "IDAS",
              href: "/idas",
              icon: <HiPlusCircle />,
              subsubItems: [
                { name: "IPR SAOs-2022 ", href: "/idas/civil-list" },
                { name: "ER Sheet", href: "/idas/civil-list" },
                { name: "IPR", href: "/idas/ipr", icon: <HiPlusCircle /> },
                { name: "Transfer Policy ", href: "/idas/transferpolicy" },
                { name: "Recruitment Rules ", href: "/idas/recruitmentrules" },
              ],
            },
            {
              name: "Sparrow",
              href: "/sparrow",
              icon: <HiPlusCircle />,
              subsubItems: [
                { name: "ER Sheet", href: "/idas/civil-list" },
                { name: "IPR", href: "/idas/ipr", icon: <HiPlusCircle /> },
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
          icon: <HiPlusCircle />,
          subItems: [
            {
              name: "IDAS",
              href: "/idas",
              icon: <HiPlusCircle />,
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
              icon: <HiPlusCircle />,
              subsubItems: [
                { name: "Civil list", href: "/idas/civil-list" },
                { name: "ER Sheet", href: "/idas/civil-list" },
              ],
            },
            { name: "Guest House", href: "/guestHouse" },
            {
              name: "JCM ",
              href: "/idas",
              icon: <HiPlusCircle />,
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
              icon: <HiPlusCircle />,
            },
          ],
        },
        {
          name: "Audit",
          href: "audit",
          icon: <HiPlusCircle />,
          subItems: [
            {
              name: "Mandate & charter of audit",
              href: "/idas",
              icon: <HiPlusCircle />,
            },
            {
              name: "Existing Scope of Audit by DAD",
              href: "/sparrow",
              icon: <HiPlusCircle />,
            },
            { name: "Types od audit", href: "/guestHouse" },
            { name: "Product of IA", href: "/idas" },
          ],
        },
        {
          name: "Pension",
          href: "pension",
          icon: <HiPlusCircle />,
          subItems: [
            {
              name: "SPARSH",
              href: "/idas",
              icon: <HiPlusCircle />,
            },
            {
              name: "Pension",
              href: "/sparrow",
              icon: <HiPlusCircle />,
            },
            { name: "New Pension scheure", href: "/guestHouse" },
            { name: "Pasion Orders per 2006", href: "/idas" },
          ],
        },
        {
          name: "IFA",
          href: "ifa",
          icon: <HiPlusCircle />,
          subItems: [
            {
              name: "Evolution",
              href: "/idas",
              icon: <HiPlusCircle />,
            },
            {
              name: "Posting of IPA'S",
              href: "/sparrow",
              icon: <HiPlusCircle />,
            },
            { name: "IFA Circulars", href: "/guestHouse" },
          ],
        },
        {
          name: "HRD",
          href: "hrd",
          icon: <HiPlusCircle />,
          subItems: [
            {
              name: "Training",
              href: "/idas",
            },
            {
              name: "Departmental",
              href: "/sparrow",
              icon: <HiPlusCircle />,
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
      icon: <HiPlusCircle />,
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
      icon: <HiPlusCircle />,
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
      icon: <HiPlusCircle />,
      subMenu: [
        { name: "Image & Video Gallery", href: "/image&video-gallery" },
        { name: "E-Books", href: "/e-books" },
      ],
    },
    {
      name: "Contact Us",
      href: "/contactus",
      icon: <HiPlusCircle />,
      subMenu: [
        { name: "CGDA", href: "/cgda" },
        { name: "External Links", href: "/external-link" },
      ],
    },
    { name: "राजभाषा कोना", href: "/rajbashacona" },
    { name: "Site Map", href: "/sitemap" },
    { name: "Pensioner's Portal", href: "/pensionerPortal" },
  ];

  const toggleDropdown = (index) => {
    setDropdown(dropdown === index ? null : index);
  };

  const toggleSubDropdown = (index) => {
    setSubDropdown(subDropdown === index ? null : index);
  };

  const toggleSubSubDropdown = (index) => {
    setSubSubDropdown(subSubDropdown === index ? null : index);
  };

  return (
    <div>
      <nav className="bg-[#009ace] p-4">
        <div className="flex justify-between items-center">
          <p className="text-md font-[900] text-white">CGDA</p>
          <button
            className="lg:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <HiPlusCircle className="text-[15px]" />
          </button>
        </div>
      </nav>

      <div
        className={`lg:flex ${
          mobileMenuOpen ? "block" : "hidden"
        } w-full lg:w-auto bg-[#000099] text-white`}
      >
        <ul className="flex flex-col py-2 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
          {menuItems.map((item, index) => (
            <li key={index} className="relative">
              <div
                className={`block py-3 pb-4 xl:text-[15px] lg:text-[13px] md:text-[12px] border-b-2 border-blue-800 text-white hover:bg-[rgb(0,0,255)] hover:underline`}
                onClick={() => toggleDropdown(index)}
              >
                <div className="flex justify-between px-4 ">
                  {item.name}
                  <button onClick={() => toggleDropdown(index)}>
                    {item.icon}
                  </button>
                </div>
              </div>

             
              {item.subMenu && dropdown === index && (
                <div className="absolute left-0 mt-0 w-full px-3 bg-blue-700 z-10 shadow-lg">
                  <ul>
                    {item.subMenu.map((subItem, subIndex) => (
                      <li
                        key={subIndex}
                        className="relative border-b border-gray-500 "
                      >
                        <div className="flex justify-between items-center px-2 py-4 text-[15px] text-white hover:bg-red-900 hover:underline hover:underline-offset-4">
                          <span>{subItem.name}</span>
                          <button onClick={() => toggleSubDropdown(subIndex)}>
                            {subItem.icon}
                          </button>
                        </div>

                        {subItem.subItems && subDropdown === subIndex && (
                          <div className="relative bg-blue-600 z-10">
                            <ul className="px-3">
                              {subItem.subItems.map(
                                (subSubItem, subSubIndex) => (
                                  <li
                                    key={subSubIndex}
                                    className="border-b border-gray-500"
                                  >
                                    <div className="flex justify-between items-center px-3 py-4 text-white hover:bg-red-900 hover:underline hover:underline-offset-4">
                                      <span>{subSubItem.name}</span>
                                      <button
                                        onClick={() =>
                                          toggleSubSubDropdown(subSubIndex)
                                        }
                                      >
                                        {subSubItem.icon}
                                      </button>
                                    </div>

                                    {subSubItem.subsubItems &&
                                      subSubDropdown === subSubIndex && (
                                        <div className="relative left-0 top-0 w-full bg-blue-500 z-20">
                                          <ul>
                                            {subSubItem.subsubItems.map(
                                              (
                                                subSubSubItem,
                                                subSubSubIndex
                                              ) => (
                                                <li
                                                  key={subSubSubIndex}
                                                  className="border-b border-gray-500 hover:bg-red-900 hover:underline hover:underline-offset-4"
                                                >
                                                  <Link
                                                    href={subSubSubItem.href}
                                                    className="flex justify-start items-center px-3 py-4 text-white "
                                                  >
                                                    {subSubSubItem.name}
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
  );
};

export default MobileViewNavbar;
