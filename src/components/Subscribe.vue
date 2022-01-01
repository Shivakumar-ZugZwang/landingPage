<template>
  <div class="Subscribe" id="subscribe">
    <div class="container mx-auto flex px-5 py-4 md:flex-row flex-col items-center">
        <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <div class="flex h-screen px-20 py-20">
            <div>
              <div class="flex flex-col bg-white px-10 py-3 h-80">
                <Tabs>
                  <TabItem name="Group">
                    <div class="first-tab">
                      <div class="flex mx-auto">
                        <div class="flex flex-col">
                          <div class="w-full">
                            <div class="border-b border-gray-200 shadow">
                              <table >
                                <thead class="bg-pink-200">
                                  <tr>
                                    <th class="px-6 py-2 text-sm text-black-500">
                                      Validity
                                    </th>
                                    <th class="px-6 py-2 text-sm text-black-500">
                                      Sessions
                                    </th>
                                    <th class="px-6 py-2 text-sm text-black-500">
                                      Duration
                                    </th>
                                  </tr>
                                </thead>
                                <tbody class="bg-white">
                                  <tr class="whitespace-nowrap">
                                    <td class="px-6 py-4 text-sm text-gray-800">1 Month</td>
                                    <td class="px-6 py-4">
                                      <div class="text-sm text-gray-900">8</div>
                                    </td>
                                    <td class="px-6 py-4">
                                      <div class="text-sm text-gray-800">1 hr. each</div>
                                    </td>
                                  </tr>
                                  <tr class="whitespace-nowrap">
                                    <td class="px-6 py-4 text-sm text-gray-800">3 Month</td>
                                    <td class="px-6 py-4">
                                      <div class="text-sm text-gray-900">24</div>
                                    </td>
                                    <td class="px-6 py-4">
                                      <div class="text-sm text-gray-800">1 hr. each</div>
                                    </td>
                                  </tr>
                                  <tr class="whitespace-nowrap">
                                    <td class="px-6 py-4 text-sm text-gray-800">6 Month</td>
                                    <td class="px-6 py-4">
                                      <div class="text-sm text-gray-900">48</div>
                                    </td>
                                    <td class="px-6 py-4">
                                      <div class="text-sm text-gray-800">1 hr. each</div>
                                    </td>
                                  </tr>
                                  <tr class="whitespace-nowrap">
                                    <td class="px-6 py-4 text-sm text-gray-800">
                                      12 Month
                                    </td>
                                    <td class="px-6 py-4">
                                      <div class="text-sm text-gray-900">96</div>
                                    </td>
                                    <td class="px-6 py-4">
                                      <div class="text-sm text-gray-800">1 hr. each</div>
                                    </td>
                                  </tr>
                                  <tr></tr>
                                  <tr></tr>
                                  <tr></tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </TabItem>
                  <TabItem name="1:1">
                    <div class="second-tab">
                      <div class="flex mx-auto">
                        <div class="flex flex-col">
                          <div class="w-full">
                            <div class="border-b border-gray-200 shadow">
                              <table>
                                <thead class="bg-pink-200">
                                  <tr>
                                    <th class="px-6 py-2 text-sm text-black-500">
                                      Validity
                                    </th>
                                    <th class="px-6 py-2 text-sm text-black-500">
                                      Sessions
                                    </th>
                                    <th class="px-6 py-2 text-sm text-black-500">
                                      Duration
                                    </th>
                                  </tr>
                                </thead>
                                <tbody class="bg-white">
                                  <tr class="whitespace-nowrap">
                                    <td class="px-6 py-4 text-sm text-gray-800">
                                      Unlimited
                                    </td>
                                    <td class="px-6 py-4">
                                      <div class="text-sm text-gray-900">10</div>
                                    </td>
                                    <td class="px-6 py-4">
                                      <div class="text-sm text-gray-800">1 hr. each</div>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </TabItem>
                </Tabs>
              </div>
              <button type="button" class="mb-2 w-full px-6 py-3 bg-green-600 text-white font-medium text-lg leading-normal uppercase rounded shadow-md hover:bg-green-800 hover:shadow-lg focus:bg-green-800 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out">Contact Us <br><i class="fab fa-whatsapp"></i> <a href="tel:8150800229">+91 9059899052</a></button>
            </div>
          </div>
        </div>
        <div class="lg:max-w-lg lg:w-full">
        <h1 class=" sm:text-4xl text-3xl mb-4 font-medium text-blue-500 text-center">Register Here</h1>
                  <object
      data="https://b24-7u5y9i.bitrix24.site/crm_form_lgptd/"
      width="100%"
      height="720"
      type="text/html"
    >
      Alternative Content
    </object>
        </div>
    </div>
  </div>
</template>

<script>
import { Tabs, TabItem } from "vue-material-tabs";

export default {
  components: {
    Tabs,
    TabItem,
  },
};
</script>

<style scoped>

.Subscribe{
        background: url(../assets/childrentransparent.png) no-repeat center; 
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
    }

iframe {
  width: 50%;
}
</style>