// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import ClientInstallOutlinedSvg from '@colelab/icons-svg/es/asn/ClientInstallOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'ClientInstallOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: ClientInstallOutlinedSvg }, slots);
  },
});
