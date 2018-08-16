const paths = {
    Sunny: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 420 420"><path fill="#f5c525" d="M420 210l-44.226 37.857 23.464 53.288-56.312 14.841-1.981 58.198-57.181-10.973-27.04 51.568L210 380l-46.724 34.779-27.04-51.568-57.181 10.973-1.982-58.198-56.311-14.842 23.464-53.286L0 210l44.226-37.857-23.464-53.288 56.312-14.841 1.981-58.198 57.181 10.973 27.04-51.568L210 40l46.723-34.779 27.041 51.568 57.181-10.973 1.982 58.198 56.311 14.842-23.464 53.286z"/><circle cx="210" cy="210" r="140" fill="#f8a805"/></svg>',
    'Thunder Showers': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M143.396 363.771a10.564 10.564 0 0 0-11.208 1.094L99.042 390.23c-8.708 6.188-13.708 15.563-13.708 25.771 0 17.646 14.354 32 32 32s32-14.354 32-32v-42.667a10.678 10.678 0 0 0-5.938-9.563z" fill="#303c42"/><path d="M128 416c0 5.885-4.792 10.667-10.667 10.667s-10.667-4.781-10.667-10.667c0-4.417 3-7.188 4.813-8.438.125-.083.229-.177.354-.271L128 394.927V416z" fill="#00aae7"/><path d="M260.729 427.771c-3.646-1.813-8-1.396-11.208 1.094l-33.146 25.365c-8.708 6.177-13.708 15.552-13.708 25.771 0 17.646 14.354 32 32 32s32-14.354 32-32v-42.667c0-4.063-2.313-7.771-5.938-9.563z" fill="#303c42"/><path d="M245.333 480c0 5.885-4.792 10.667-10.667 10.667S224 485.885 224 480c0-4.417 3-7.167 4.792-8.417l.375-.281 16.167-12.375V480z" fill="#00aae7"/><path d="M378.063 363.771a10.564 10.564 0 0 0-11.208 1.094l-33.146 25.365C325 396.417 320 405.792 320 416c0 17.646 14.354 32 32 32s32-14.354 32-32v-42.667c0-4.062-2.312-7.77-5.937-9.562z" fill="#303c42"/><path d="M362.667 416c0 5.885-4.792 10.667-10.667 10.667s-10.667-4.781-10.667-10.667c0-4.417 3-7.188 4.813-8.438.125-.083.229-.177.354-.271l16.167-12.365V416z" fill="#00aae7"/><path d="M394.667 106.667c-.762 0-1.513.171-2.273.186C366.741 42.762 304.542 0 234.667 0 145.935 0 72.861 67.509 65.111 154.884 27.374 167.822 0 203.263 0 245.333c0 52.938 43.063 96 96 96h106.451l-10.242 51.24c-.979 4.938 1.604 9.885 6.208 11.885a10.699 10.699 0 0 0 12.938-3.594l42.522-59.531h140.79C459.354 341.333 512 288.698 512 224s-52.646-117.333-117.333-117.333z" fill="#303c42"/><path d="M234.458 290.094a10.688 10.688 0 0 0-2.208-8.854 10.683 10.683 0 0 0-8.25-3.906h-43.271l65.729-92.031-11.583 57.938a10.688 10.688 0 0 0 2.208 8.854 10.683 10.683 0 0 0 8.25 3.906h43.271l-65.729 92.031 11.583-57.938z" fill="#ffce34"/><path d="M394.667 320H269.115l48.906-68.469a10.68 10.68 0 0 0 .792-11.083 10.656 10.656 0 0 0-9.479-5.781h-50.979l18.771-93.906c.979-4.938-1.604-9.885-6.208-11.885-4.563-1.969-9.979-.5-12.938 3.594L151.313 281.802a10.68 10.68 0 0 0-.792 11.083 10.656 10.656 0 0 0 9.479 5.781h50.979L206.715 320H96c-41.167 0-74.667-33.5-74.667-74.667s33.5-74.667 74.667-74.667a10.66 10.66 0 0 0 10.667-10.667A10.66 10.66 0 0 0 96 149.332c-3.098 0-6.021.626-9.044.914 9.751-73.22 72.298-128.914 147.711-128.914 59.223 0 112.033 35.142 135.678 88.26-16.501 3.553-32.368 10.339-46.053 20.51-4.708 3.521-5.708 10.198-2.188 14.927 3.521 4.729 10.229 5.667 14.917 2.198C353.708 134.833 374.167 128 394.667 128c52.938 0 96 43.063 96 96s-43.063 96-96 96z" fill="#bbdefb"/><path d="M101.918 151.361c17.549-62.978 75.138-108.694 143.415-108.694 50.949 0 97.027 26.111 123.999 67.198.341-.077.672-.197 1.013-.271-23.646-53.118-76.456-88.26-135.678-88.26-75.413 0-137.96 55.694-147.711 128.914 3.023-.288 5.947-.914 9.044-.914 2.241-.001 4.202.848 5.918 2.027z" opacity=".2" fill="#fff"/><path d="M478.628 178.417C479.27 182.893 480 187.349 480 192c0 52.938-43.063 96-96 96h-92.029l-22.857 32h125.552c52.938 0 96-43.063 96-96 .001-16.583-4.607-31.958-12.038-45.583zM150.521 292.885c-.792-1.534-.999-3.22-1.001-4.885H85.333c-26.758 0-50.089-14.273-63.273-35.486C25.737 290.276 57.292 320 96 320h110.715l4.264-21.333H160c-4 0-7.646-2.229-9.479-5.782z" opacity=".1"/><linearGradient id="a" gradientUnits="userSpaceOnUse" x1="-45.18" y1="639.237" x2="-25.005" y2="629.829" gradientTransform="matrix(21.3333 0 0 -21.3333 996.333 13791.667)"><stop offset="0" stop-color="#fff" stop-opacity=".2"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></linearGradient><path d="M143.396 363.771a10.564 10.564 0 0 0-11.208 1.094L99.042 390.23c-8.708 6.188-13.708 15.563-13.708 25.771 0 17.646 14.354 32 32 32s32-14.354 32-32v-42.667a10.678 10.678 0 0 0-5.938-9.563zm117.333 64c-3.646-1.813-8-1.396-11.208 1.094l-33.146 25.365c-8.708 6.177-13.708 15.552-13.708 25.771 0 17.646 14.354 32 32 32s32-14.354 32-32v-42.667c0-4.063-2.313-7.771-5.938-9.563zm117.334-64a10.564 10.564 0 0 0-11.208 1.094l-33.146 25.365C325 396.417 320 405.792 320 416c0 17.646 14.354 32 32 32s32-14.354 32-32v-42.667c0-4.062-2.312-7.77-5.937-9.562zm16.604-257.104c-.762 0-1.513.171-2.273.186C366.741 42.762 304.542 0 234.667 0 145.935 0 72.861 67.509 65.111 154.884 27.374 167.822 0 203.263 0 245.333c0 52.938 43.063 96 96 96h106.451l-10.242 51.24c-.979 4.938 1.604 9.885 6.208 11.885a10.699 10.699 0 0 0 12.938-3.594l42.522-59.531h140.79C459.354 341.333 512 288.698 512 224s-52.646-117.333-117.333-117.333z" fill="url(#a)"/></svg>',
    'Night Showers': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M192.202 228.229c2.333 0 4.656-.087 6.97-.237 9.322-10.124 22.676-16.474 37.524-16.474 3.657 0 7.221.393 10.661 1.124a98.17 98.17 0 0 0 2.519-1.586c.704-.462 1.396-.944 2.089-1.423.433-16.07 6.379-30.76 16.03-42.245-12.886 7.006-27.254 10.671-42.226 10.671a89.132 89.132 0 0 1-15.919-1.428l-11.894-3.033c-35.365-11.697-60.952-45.069-60.952-84.304 0-19.639 6.29-38.255 18.185-53.828a5.586 5.586 0 1 0-6.764-8.474c-18.115 8.285-33.476 21.493-44.419 38.196-11.236 17.146-17.174 37.087-17.174 57.672-.001 58.101 47.27 105.369 105.37 105.369z" fill="#ede21b"/><path d="M212.513 215.843c-1.436.061-2.873.104-4.318.104-58.1 0-105.371-47.268-105.371-105.37 0-20.585 5.938-40.527 17.173-57.672a105.878 105.878 0 0 1 16.327-19.382 105.585 105.585 0 0 0-32.321 31.664C92.768 82.333 86.83 102.274 86.83 122.859c0 58.101 47.27 105.37 105.371 105.37 2.333 0 4.656-.087 6.97-.237a51.286 51.286 0 0 1 13.342-10.364v-1.785z" fill="#eac71c"/><circle cx="248.612" cy="79.591" r="18.301" fill="#f29f26"/><path d="M249.692 79.586c0-6.543 3.446-12.268 8.609-15.503a18.188 18.188 0 0 0-9.693-2.798c-10.105 0-18.301 8.194-18.301 18.301 0 10.107 8.196 18.303 18.301 18.303 3.564 0 6.881-1.035 9.693-2.798-5.163-3.237-8.609-8.962-8.609-15.505z" fill="#ef8229"/><path d="M446.305 209.239c-4.483 0-8.835.573-12.983 1.647-7.431-10.729-19.827-17.762-33.869-17.762a41.1 41.1 0 0 0-13.047 2.121c-6.913-30.596-34.246-53.453-66.932-53.453-37.91 0-68.64 30.73-68.64 68.64 0 .781.031 1.556.06 2.328a51.017 51.017 0 0 0-15.281-2.328c-23.225 0-42.812 15.519-48.991 36.75 10.453-6.443 22.763-10.167 35.946-10.167 37.908 0 68.64 30.732 68.64 68.64 0 .781-.034 1.555-.06 2.328a50.999 50.999 0 0 1 15.279-2.328 50.764 50.764 0 0 1 25.51 6.842h114.369c28.517 0 51.631-23.116 51.631-51.631-.002-28.512-23.116-51.627-51.632-51.627z" fill="#9fdef7"/><path d="M223.387 10.873c0 6.005-4.868 10.871-10.873 10.871-6.006 0-10.873-4.866-10.873-10.871C201.64 4.866 206.507 0 212.513 0c6.005 0 10.874 4.866 10.874 10.873z" fill="#f29f26"/><path d="M299.306 192.402c0-17.481 3.169-34.219 8.951-49.682-32.573 5.355-57.425 33.623-57.425 67.713 0 .781.031 1.556.06 2.328a51.012 51.012 0 0 0-15.281-2.328c-23.225 0-42.812 15.519-48.991 36.75 10.453-6.443 22.763-10.167 35.946-10.167 37.908 0 68.64 30.732 68.64 68.64 0 .781-.034 1.555-.06 2.328a50.999 50.999 0 0 1 15.279-2.328 50.764 50.764 0 0 1 25.51 6.842h33.685c-39.841-25.122-66.314-69.514-66.314-120.096z" fill="#83d4ed"/><path d="M468.406 372.967a8.67 8.67 0 0 1-6.925-13.877l15.192-20.223a8.67 8.67 0 0 1 13.864 10.414l-15.192 20.223a8.654 8.654 0 0 1-6.939 3.463zm-34.818 46.342a8.67 8.67 0 0 1-6.924-13.877l15.192-20.221a8.67 8.67 0 0 1 13.862 10.416l-15.191 20.221a8.655 8.655 0 0 1-6.939 3.461zm-34.817 46.346a8.67 8.67 0 0 1-6.925-13.876l15.192-20.223a8.67 8.67 0 0 1 13.864 10.414l-15.192 20.223a8.661 8.661 0 0 1-6.939 3.462zM363.951 512a8.638 8.638 0 0 1-5.201-1.738c-3.828-2.875-4.599-8.31-1.723-12.139l15.194-20.223c2.875-3.826 8.311-4.598 12.139-1.723 3.828 2.875 4.599 8.31 1.723 12.139l-15.194 20.223a8.654 8.654 0 0 1-6.938 3.461zm36.211-139.033a8.67 8.67 0 0 1-6.925-13.877l15.192-20.223a8.67 8.67 0 0 1 13.864 10.414l-15.192 20.223a8.655 8.655 0 0 1-6.939 3.463zm-34.817 46.342a8.67 8.67 0 0 1-6.924-13.877l15.192-20.221a8.67 8.67 0 0 1 13.862 10.416l-15.191 20.221a8.659 8.659 0 0 1-6.939 3.461zm-34.82 46.346a8.638 8.638 0 0 1-5.201-1.738c-3.828-2.875-4.599-8.31-1.723-12.139l15.194-20.223a8.671 8.671 0 0 1 12.139-1.723c3.828 2.875 4.599 8.31 1.723 12.139l-15.194 20.223a8.66 8.66 0 0 1-6.938 3.461zM295.707 512a8.638 8.638 0 0 1-5.201-1.738c-3.828-2.875-4.599-8.31-1.724-12.139l15.195-20.223c2.875-3.826 8.31-4.598 12.139-1.723 3.828 2.875 4.599 8.31 1.723 12.139l-15.194 20.223a8.656 8.656 0 0 1-6.938 3.461zm-33.427-46.345a8.638 8.638 0 0 1-5.201-1.738c-3.828-2.875-4.599-8.31-1.723-12.139l15.194-20.223a8.671 8.671 0 0 1 12.139-1.723c3.828 2.875 4.599 8.31 1.723 12.139l-15.194 20.223a8.657 8.657 0 0 1-6.938 3.461zM227.463 512a8.67 8.67 0 0 1-6.925-13.876l15.192-20.223a8.67 8.67 0 0 1 13.864 10.414l-15.192 20.223a8.659 8.659 0 0 1-6.939 3.462zm-33.428-46.345a8.638 8.638 0 0 1-5.201-1.738c-3.828-2.875-4.599-8.31-1.723-12.139l15.194-20.223a8.671 8.671 0 0 1 12.139-1.723c3.828 2.875 4.599 8.31 1.723 12.139l-15.194 20.223a8.657 8.657 0 0 1-6.938 3.461zM159.218 512a8.67 8.67 0 0 1-6.925-13.876l15.192-20.223a8.67 8.67 0 0 1 13.864 10.414l-15.192 20.223a8.659 8.659 0 0 1-6.939 3.462zm-33.426-46.345a8.638 8.638 0 0 1-5.201-1.738c-3.828-2.875-4.599-8.31-1.723-12.139l15.194-20.223a8.671 8.671 0 0 1 12.139-1.723c3.828 2.875 4.599 8.31 1.723 12.139l-15.194 20.223a8.661 8.661 0 0 1-6.938 3.461zM90.974 512a8.67 8.67 0 0 1-6.925-13.876l15.192-20.223a8.67 8.67 0 0 1 13.864 10.414l-15.192 20.223A8.657 8.657 0 0 1 90.974 512zm-33.427-46.345a8.67 8.67 0 0 1-6.925-13.876l15.192-20.223a8.67 8.67 0 0 1 13.864 10.414l-15.192 20.223a8.659 8.659 0 0 1-6.939 3.462zM22.727 512a8.638 8.638 0 0 1-5.201-1.738c-3.828-2.875-4.599-8.31-1.723-12.139L30.997 477.9c2.875-3.826 8.31-4.598 12.139-1.723 3.828 2.875 4.599 8.31 1.723 12.139l-15.194 20.223A8.654 8.654 0 0 1 22.727 512z" fill="#9fdef7"/><path d="M282.486 406.639h25.023c28.186 0 51.034-22.848 51.034-51.032 0-28.186-22.848-51.034-51.034-51.034a51.04 51.04 0 0 0-15.279 2.328c.025-.773.06-1.548.06-2.328 0-37.908-30.732-68.64-68.64-68.64-32.688 0-60.019 22.856-66.935 53.453a41.14 41.14 0 0 0-13.045-2.121c-14.044 0-26.438 7.031-33.871 17.764a51.793 51.793 0 0 0-12.984-1.649c-28.513 0-51.629 23.114-51.629 51.629S68.3 406.64 96.815 406.64h156.786" fill="#e4f2f9"/><path d="M156.692 296.366c0-2.597.075-5.177.212-7.74-.062.254-.131.504-.19.76a41.14 41.14 0 0 0-13.045-2.121c-14.044 0-26.438 7.031-33.871 17.764a51.793 51.793 0 0 0-12.984-1.649c-28.513 0-51.629 23.114-51.629 51.629s23.114 51.631 51.629 51.631h112.488c-32.091-26.013-52.61-65.744-52.61-110.274z" fill="#d7edf9"/></svg>',
    'Mild Showers': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 33.062 33.062"><g fill="#006DF0"><path d="M25.615 22.324a.5.5 0 0 1 0-1 6.453 6.453 0 0 0 6.446-6.446c0-3.553-2.892-6.443-6.446-6.443a6.56 6.56 0 0 0-.991.083.5.5 0 0 1-.522-.273C22.558 5.114 19.44 3.17 15.965 3.17a9.049 9.049 0 0 0-8.804 6.904c-.056.228-.278.373-.498.38l-.127-.007h-.009C3.437 10.447 1 12.886 1 15.884c0 3 2.441 5.44 5.442 5.44a.5.5 0 0 1 0 1A6.448 6.448 0 0 1 0 15.884a6.45 6.45 0 0 1 6.294-6.44 10.046 10.046 0 0 1 9.67-7.274c3.738 0 7.104 2.026 8.869 5.311.28-.031.534-.046.781-.046 4.106 0 7.446 3.339 7.446 7.443.002 4.106-3.339 7.446-7.445 7.446z"/><path d="M25.615 22.324a.5.5 0 0 1 0-1 6.453 6.453 0 0 0 6.446-6.446c0-3.553-2.892-6.443-6.446-6.443a6.45 6.45 0 0 0-4.858 2.208.5.5 0 0 1-.753-.657 7.443 7.443 0 0 1 5.611-2.55c4.106 0 7.446 3.339 7.446 7.443.001 4.105-3.34 7.445-7.446 7.445z"/></g><path d="M8.275 30.892a.5.5 0 0 1-.476-.653l.918-2.855a.5.5 0 1 1 .952.306l-.918 2.856a.5.5 0 0 1-.476.346zm1.837-5.712a.5.5 0 0 1-.476-.653l.918-2.856a.5.5 0 0 1 .952.306l-.918 2.856a.5.5 0 0 1-.476.347zm8.163 5.712a.5.5 0 0 1-.476-.653l.918-2.855a.5.5 0 1 1 .952.306l-.918 2.856a.5.5 0 0 1-.476.346zm1.837-5.712a.5.5 0 0 1-.476-.653l.918-2.856a.5.5 0 0 1 .952.306l-.918 2.856a.5.5 0 0 1-.476.347zm-6.837 5.712a.5.5 0 0 1-.476-.653l.918-2.855a.5.5 0 1 1 .952.306l-.918 2.856a.5.5 0 0 1-.476.346zm1.837-5.712a.5.5 0 0 1-.476-.653l.918-2.856a.5.5 0 0 1 .952.306l-.918 2.856a.5.5 0 0 1-.476.347z" fill="#006DF0"/></svg>',
    'Partly Sunny': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21.888 21.888"><path d="M13.5 2.138l-1 3-1-3a1.053 1.053 0 1 1 2 0zm5.364 3.05l-2.829 1.415 1.415-2.829a1.055 1.055 0 0 1 1.886.943 1.054 1.054 0 0 1-.472.471zm1.636 5.95l-3-1 3-1a1.054 1.054 0 1 1 0 2zM7.55 3.774l1.415 2.829-2.829-1.415A1.055 1.055 0 1 1 7.55 3.774z" fill="#f5c525"/><path d="M16.776 11.48c.139-.424.224-.871.224-1.342 0-2.481-2.019-4.5-4.5-4.5-1.34 0-2.537.594-3.357 1.528-.049-.007-.092-.028-.143-.028a5.98 5.98 0 0 0-4.469 2.011 1.054 1.054 0 0 0-1.365 1.322c.057.167.158.299.277.411a5.984 5.984 0 0 0-.441 2.382A4.007 4.007 0 0 0 0 17.138c0 2.206 1.795 4 4 4h11c2.757 0 5-2.243 5-5 0-2.129-1.344-3.939-3.224-4.658zM12.5 7.638c1.379 0 2.5 1.121 2.5 2.5 0 .366-.096.706-.238 1.019-.354.021-.72.074-1.118.188a4.993 4.993 0 0 0-2.967-2.905 2.485 2.485 0 0 1 1.823-.802zm2.5 11.5H4c-1.104 0-2-.897-2-2s.896-2 1.908-2.006l1.422.016-.248-1.202A4.005 4.005 0 0 1 9 9.138c.024 0 .045-.013.069-.014a4.012 4.012 0 0 1 3.847 3.27c.031.078.022.131.038.186a.985.985 0 0 0 .946.712c.106-.001.197.003.289-.023.312-.09.569-.131.811-.131 1.654 0 3 1.346 3 3s-1.346 3-3 3z" fill="#abbfd0"/></svg>',
    Cloudy: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40.062 40.062" ><g fill="#abbfd0"><path d="M25.615 33.608H6.442A6.449 6.449 0 0 1 0 27.167a6.45 6.45 0 0 1 6.294-6.44 10.046 10.046 0 0 1 9.67-7.274c3.738 0 7.104 2.026 8.869 5.311.28-.031.534-.046.781-.046 4.106 0 7.446 3.339 7.446 7.443.002 4.107-3.339 7.447-7.445 7.447zM6.442 21.726A5.448 5.448 0 0 0 1 27.167c0 3 2.441 5.44 5.442 5.44h19.173a6.453 6.453 0 0 0 6.446-6.446c0-3.553-2.892-6.443-6.446-6.443a6.56 6.56 0 0 0-.991.083.502.502 0 0 1-.522-.273c-1.544-3.129-4.663-5.074-8.138-5.074a9.049 9.049 0 0 0-8.804 6.904.508.508 0 0 1-.498.38l-.22-.012z"/><path d="M25.615 33.608a.5.5 0 0 1 0-1 6.453 6.453 0 0 0 6.446-6.446c0-3.553-2.892-6.443-6.446-6.443a6.45 6.45 0 0 0-4.858 2.208.5.5 0 1 1-.753-.657 7.443 7.443 0 0 1 5.611-2.55c4.106 0 7.446 3.339 7.446 7.443.001 4.105-3.34 7.445-7.446 7.445z"/><path d="M32.615 26.608a.5.5 0 0 1 0-1 6.453 6.453 0 0 0 6.446-6.446c0-3.553-2.892-6.443-6.446-6.443a6.56 6.56 0 0 0-.991.083.502.502 0 0 1-.522-.273c-1.544-3.129-4.663-5.074-8.138-5.074a9.049 9.049 0 0 0-8.804 6.904.508.508 0 0 1-.498.38l-.127-.007c-.276 0-.547-.227-.547-.502 0-.22.112-.409.298-.476a10.045 10.045 0 0 1 9.677-7.299c3.738 0 7.104 2.026 8.869 5.311.28-.031.534-.046.781-.046 4.106 0 7.446 3.339 7.446 7.443.003 4.105-3.338 7.445-7.444 7.445z"/><path d="M32.615 26.608a.5.5 0 0 1 0-1 6.453 6.453 0 0 0 6.446-6.446c0-3.553-2.892-6.443-6.446-6.443a6.45 6.45 0 0 0-4.858 2.208.5.5 0 0 1-.753-.657 7.443 7.443 0 0 1 5.611-2.55c4.106 0 7.446 3.339 7.446 7.443.001 4.105-3.34 7.445-7.446 7.445z"/></g></svg>'
};
