import service from './service'

export const testAPI = {

    getTestAPIData: async () => {
        return await service({
          url: ``,
          method: 'GET',
        }).then((res) => res)
      },

}